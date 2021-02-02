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
import com.app.pojos.AdminFaculty;
import com.app.repository.IAdminFacultyRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/adminfaculty")
@Validated
public class AdminFacultyController {

	@Autowired
	private IAdminFacultyRepository repos;
	@Autowired
	private FacultyController ctrler;
	
	public AdminFacultyController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> getAllAdminFacultys()
	{
		List<AdminFaculty> faculties=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all faculties", faculties),HttpStatus.OK);

	}

	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<AdminFaculty> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			AdminFaculty faculty=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required faculty", faculty),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}

	@PutMapping()
	public ResponseEntity<?> updateAdminFaculty(@RequestBody AdminFaculty faculty)
	{
		try {
			return new ResponseEntity<>(repos.save(faculty),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in faculty controller " + e);
		}
		throw new CourseNotFoundException("AdminFaculty ID Invalid : record updation failed");

	}

	@PostMapping
	public ResponseEntity<?> addNewAdminFaculty(@RequestBody AdminFaculty newfaculty)
	{
		
		return new ResponseEntity<>(repos.save(newfaculty),HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteAdminFaculty(@PathVariable Integer id)
	{
		Optional<AdminFaculty> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			this.ctrler.deleteFaculty(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("AdminFaculty ID Invalid : record deletion failed");

	}
}
