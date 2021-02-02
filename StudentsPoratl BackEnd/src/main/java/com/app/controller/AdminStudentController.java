package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

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
import com.app.pojos.AdminStudent;
import com.app.repository.IAdminStudentRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/adminstudent")
@Validated
public class AdminStudentController {

	@Autowired
	private IAdminStudentRepository repos;
	
	@Autowired
	private StudentController ctrler;
	@GetMapping
	public ResponseEntity<?> getAllAdminStudentDetails()
	{
		List<AdminStudent> list=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all student", list),HttpStatus.OK);

	}
	
	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<AdminStudent> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			AdminStudent stud=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required student", stud),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}

	
	@PostMapping()
	public ResponseEntity<?> addNewAdminStudent(@RequestBody @Valid AdminStudent stud)
	{
		return new ResponseEntity<>(repos.save(stud),HttpStatus.OK);
	}
	
	@PutMapping()
	public ResponseEntity<?> updateUser(@RequestBody AdminStudent std)
	{
		try {
			return new ResponseEntity<>(repos.save(std),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in student controller " + e);
		}
		throw new CourseNotFoundException("AdminStudent ID Invalid : record updation failed");

	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Integer id)
	{
		System.out.println(id);
		Optional<AdminStudent> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			this.ctrler.deleteUser(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("AdminStudent ID Invalid : record deletion failed");

	}
}
