package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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
import com.app.pojos.Email;
import com.app.pojos.Faculty;
import com.app.repository.IFacultyRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/faculty")
@Validated
public class FacultyController {

	@Autowired
	private IFacultyRepository repos;
	@Autowired
	private JavaMailSender sender;
	
	public FacultyController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> getAllFacultys()
	{
		List<Faculty> faculties=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all faculties", faculties),HttpStatus.OK);

	}

	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<Faculty> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			Faculty faculty=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required faculty", faculty),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}

	@PutMapping()
	public ResponseEntity<?> updateFaculty(@RequestBody Faculty faculty)
	{
		try {
			return new ResponseEntity<>(repos.save(faculty),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in faculty controller " + e);
		}
		throw new CourseNotFoundException("Faculty ID Invalid : record updation failed");

	}

	@PostMapping
	public ResponseEntity<?> addNewFaculty(@RequestBody Faculty newfaculty)
	{
		
		return new ResponseEntity<>(repos.save(newfaculty),HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteFaculty(@PathVariable Integer id)
	{
		Optional<Faculty> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("Faculty ID Invalid : record deletion failed");

	}
	

	public void sendMail(String user)
	{
		System.out.println(user);
		Email em=new Email();
		SimpleMailMessage mesg=new SimpleMailMessage();
		mesg.setTo(user);
		mesg.setSubject("Mail from Student's Portal");
		mesg.setText("You are registered successfully on Online Student's Portal!!!");
		System.out.println("process");
		sender.send(mesg);
		System.out.println("mail sent");

	}
}
