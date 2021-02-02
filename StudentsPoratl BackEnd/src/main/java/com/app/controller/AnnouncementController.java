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

import com.app.dto.ErrorResponse;
import com.app.dto.ResponseDTO;
import com.app.pojos.Announcement;
import com.app.pojos.Contactnumber;
import com.app.repository.IAnnouncementRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/ansment")
@Validated


public class AnnouncementController {
	@Autowired
	private IAnnouncementRepository repos;

	public AnnouncementController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> getAllAnnouncement()
	{
		List<Announcement> amt=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all Announcement", amt),HttpStatus.OK);

	}

	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<Announcement> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			Announcement amt=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required Announcement", amt),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}

	@PutMapping()
	public ResponseEntity<?> updateAnnouncement(@RequestBody Announcement amt)
	{
		try {
			System.out.println(amt);
			return new ResponseEntity<>(repos.save(amt),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in announcement controller " + e);
		}
		return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
	}
	

	@PostMapping
	public ResponseEntity<?> addNewAnnouncement(@RequestBody Announcement amt)
		{
		
		return new ResponseEntity<>(repos.save(amt),HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteAnnouncement(@PathVariable Integer id)
	{
		Optional<Announcement> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);

	}

	
}
