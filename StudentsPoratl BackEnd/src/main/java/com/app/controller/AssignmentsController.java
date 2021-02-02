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
import com.app.pojos.Assignments;
import com.app.pojos.Classroom;
import com.app.pojos.User;
import com.app.repository.IAssignmentRepository;
@CrossOrigin(origins="http://localhost:4200")

@RestController
@RequestMapping("/assignment")
@Validated
public class AssignmentsController {
	@Autowired
	private IAssignmentRepository repos;

	public AssignmentsController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> getAllAssignments()
	{
		List<Assignments> assigns=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all assignments", assigns),HttpStatus.OK);

	}

	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<Assignments> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			Assignments assign=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required class", assign),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);

	}

	@PutMapping()
	public ResponseEntity<?> updateAssignments(@RequestBody Assignments assign)
	{

		try {
			return new ResponseEntity<>(repos.save(assign),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in assignment controller " + e);
		}
		throw new CourseNotFoundException("Assigment ID Invalid : record updation failed");

	}

	@PostMapping
	public ResponseEntity<?> addNewAssignment(@RequestBody Assignments newassign)
	{
		
		return new ResponseEntity<>(repos.save(newassign),HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteAssignment(@PathVariable Integer id)
	{
		Optional<Assignments> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("Assignment ID Invalid : record deletion failed");

	}

}
