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
import com.app.pojos.Course;
import com.app.pojos.Notes;
import com.app.repository.INotesRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/notes")
@Validated
public class NotesController {
@Autowired
private INotesRepository repos;

@GetMapping
public ResponseEntity<?> getAllNotes()
{
	List<Notes> nts=repos.findAll();
	return new ResponseEntity<>(new ResponseDTO("success","List of all Notes", nts),HttpStatus.OK);

}

@GetMapping("/{nid}")
public ResponseEntity<?> getById(@PathVariable Integer nid)
{
	Optional<Notes> opt=repos.findById(nid);
	if(opt.isPresent())
	{
		Notes nts=opt.get();
		return new ResponseEntity<>(new ResponseDTO("success","Required Notes", nts),HttpStatus.OK);
	}
	ErrorResponse resp=new ErrorResponse("Invalid Id", "");
	return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
}

@PutMapping()
public ResponseEntity<?> updateNotes(@RequestBody Notes notes)
{

	try {
		return new ResponseEntity<>(repos.save(notes),HttpStatus.OK);
	}
	catch(RuntimeException e) {
		System.out.println("err in notes controller " + e);
	}
	throw new CourseNotFoundException("Notes ID Invalid : record updation failed");
}

@PostMapping
public ResponseEntity<?> addNewNotes(@RequestBody Notes newNotes)
	{
	
	return new ResponseEntity<>(repos.save(newNotes),HttpStatus.OK);
}

@DeleteMapping("/{id}")
public ResponseEntity<?> deleteNotes(@PathVariable Integer id)
{
	Optional<Notes> opt =repos.findById(id);
	if(opt.isPresent())
	{
		repos.deleteById(id);
		return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
	}
	throw new CourseNotFoundException("Notes ID Invalid : record deletion failed");

}
}
