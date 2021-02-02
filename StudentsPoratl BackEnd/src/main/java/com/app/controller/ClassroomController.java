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
import com.app.pojos.Classroom;
import com.app.pojos.Faculty;
import com.app.repository.IClassroomRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/classroom")
@Validated
public class ClassroomController {
@Autowired
private IClassroomRepository repos;

@GetMapping
public ResponseEntity<?> getAllClasses()
{
	List<Classroom> classes=repos.findAll();
	return new ResponseEntity<>(new ResponseDTO("success","List of all classes", classes),HttpStatus.OK);

}

@GetMapping("/{uid}")
public ResponseEntity<?> getById(@PathVariable Integer uid)
{
	Optional<Classroom> opt=repos.findById(uid);
	if(opt.isPresent())
	{
		Classroom cls=opt.get();
		return new ResponseEntity<>(new ResponseDTO("success","Required class", cls),HttpStatus.OK);
	}
	ErrorResponse resp=new ErrorResponse("Invalid Id", "");
	return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
}

@PutMapping()
public ResponseEntity<?> updateClass(@RequestBody Classroom cls)
{

	try {
		return new ResponseEntity<>(repos.save(cls),HttpStatus.OK);
	}
	catch(RuntimeException e) {
		System.out.println("err in classroom controller " + e);
	}
	throw new CourseNotFoundException("Class ID Invalid : record updation failed");

}

@PostMapping

//@RequestMapping(value = "/course", method = RequestMethod.POST)
public ResponseEntity<?> addNewClass(@RequestBody Classroom newClass)
	{
	
	return new ResponseEntity<>(repos.save(newClass),HttpStatus.OK);
}

@DeleteMapping("/{id}")
public ResponseEntity<?> deleteClass(@PathVariable Integer id)
{
	Optional<Classroom> opt =repos.findById(id);
	if(opt.isPresent())
	{
		repos.deleteById(id);
		return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
	}
	throw new CourseNotFoundException("Class ID Invalid : record deletion failed");

}

}
