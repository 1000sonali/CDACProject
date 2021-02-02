package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.app.pojos.Placement;
import com.app.repository.IPlacementRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/placement")
public class PlacementController {

	@Autowired
	private IPlacementRepository repos;
	
	public PlacementController()
	{
		super();
	}
	@GetMapping
	public ResponseEntity<?> getAllPlacementRecords()
	{
		List<Placement> list=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all placements", list),HttpStatus.OK);

	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getById(@PathVariable String id)
	{
		Optional<Placement> opt=repos.findById(id);
		
		if(opt.isPresent())
		{
			Placement record=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required Placement", record),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> addNewRecord(@RequestBody @Valid Placement record)
	{
		return new ResponseEntity<>(repos.save(record),HttpStatus.OK);
	}
	
	@PutMapping()
	public ResponseEntity<?> updateRecord(@RequestBody @Valid Placement record)
	{
		try {
			return new ResponseEntity<>(repos.save(record),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in placement controller " + e);
		}
		throw new CourseNotFoundException("Placement ID Invalid : record updation failed");
}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleterecord(@PathVariable String id)
	{
		Optional<Placement> opt=repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("Faculty ID Invalid : record deletion failed");

	}
}
