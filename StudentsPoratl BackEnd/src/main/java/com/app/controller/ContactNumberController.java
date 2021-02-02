package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom.CourseNotFoundException;
import com.app.dto.ErrorResponse;
import com.app.dto.ResponseDTO;
import com.app.pojos.Contactnumber;
import com.app.pojos.Course;
import com.app.repository.IContactRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/contact")
@Validated

public class ContactNumberController {
	@Autowired
	private IContactRepository repos;

	public ContactNumberController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> getAllContact()
	{
		List<Contactnumber> cntct=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all contacts", cntct),HttpStatus.OK);

	}

	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<Contactnumber> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			Contactnumber cntct=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required contacts", cntct),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}

	@PutMapping()
	public ResponseEntity<?> updateContact(@RequestBody Contactnumber cntct)
	{
		try {
			System.out.println(cntct);
			return new ResponseEntity<>(repos.save(cntct),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in contact controller " + e);
		}
		return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
	}
	

	@PostMapping
	public ResponseEntity<?> addNewContact(@RequestBody Contactnumber cntct)
		{
		
		return new ResponseEntity<>(repos.save(cntct),HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteContact(@PathVariable Integer id)
	{
		Optional<Contactnumber> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);

	}

}
