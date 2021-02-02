package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ErrorResponse;
import com.app.pojos.Test;
import com.app.repository.ITestRepository;

@RestController
@RequestMapping("/test")
@Validated
public class TestController {

	@Autowired
	private ITestRepository repos;
	public TestController()
	{
		super();
		System.out.println("In constr"+getClass().getName());
	}
	
	@GetMapping
	public ResponseEntity<?> getAllTest()
	{
		List<Test> list=repos.findAll();
		return  new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@GetMapping("{/id}")
	public ResponseEntity<?> getById(@PathVariable String id)
	{
		Optional<Test> opt=repos.findById(id);
		
		if(opt.isPresent())
		{
			Test test=opt.get();
			return new ResponseEntity<>(test,HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
	}
	
	@PostMapping
	public ResponseEntity<?> addNewTest(@RequestBody @Valid Test newtest)
	{
		return new ResponseEntity<>(repos.save(newtest),HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateTest(@PathVariable String id, @RequestBody Test updateTest)
	{
		Optional<Test> opt=repos.findById(id);
		
		if(opt.isPresent())
		{
			Test test=opt.get();
			
			test.setStartTest(updateTest.getStartTest());
			test.setEndTest(updateTest.getEndTest());
			return new ResponseEntity<>(HttpStatus.OK);
		}
		ErrorResponse err=new ErrorResponse("Invalid Id...","");
		return new ResponseEntity<>(err,HttpStatus.UNPROCESSABLE_ENTITY);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTest(@PathVariable String id)
	{
		Optional<Test> opt=repos.findById(id);
		
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
	}
}
