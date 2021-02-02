package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import com.app.pojos.Subject;
import com.app.pojos.User;
import com.app.repository.ISubjectRepository;
import com.app.repository.IUserRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/subject")
@Validated
public class SubjectController {

	@Autowired
	private ISubjectRepository repos;

	public SubjectController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> getAllSubjects()
	{
		List<Subject> subject=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all subjects", subject),HttpStatus.OK);

	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getById(@PathVariable Integer id)
	{
		Optional<Subject> opt=repos.findById(id);
		if(opt.isPresent())
		{
			Subject sub=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required subject", sub),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}

	@PutMapping()
	public ResponseEntity<?> updateSubject(@RequestBody Subject subj)
	{
		try {
			return new ResponseEntity<>(repos.save(subj),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in subject controller " + e);
		}
		throw new CourseNotFoundException("Subject ID Invalid : record updation failed");

	}

	@PostMapping()
	public ResponseEntity<?> addNewUser(@RequestBody Subject newsubj)
	{		
		return new ResponseEntity<>(repos.save(newsubj),HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Integer id)
	{
		Optional<Subject> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("Subject ID Invalid : record deletion failed");

	}

}
