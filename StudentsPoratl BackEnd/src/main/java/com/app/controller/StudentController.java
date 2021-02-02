package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

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
import com.app.pojos.Classroom;
import com.app.pojos.Email;
import com.app.pojos.Student;
import com.app.repository.IStudentRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/student")
@Validated
public class StudentController {

	@Autowired
	private IStudentRepository repos;
	@Autowired
	private JavaMailSender sender;
	
	@GetMapping
	public ResponseEntity<?> getAllStudentDetails()
	{
		List<Student> list=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all student", list),HttpStatus.OK);

	}
	
	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<Student> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			Student stud=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required student", stud),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}

	
	@PostMapping()
	public ResponseEntity<?> addNewStudent(@RequestBody @Valid Student stud)
	{
		this.sendMail(stud.getEmail());
		return new ResponseEntity<>(repos.save(stud),HttpStatus.OK);
	}
	
	@PutMapping()
	public ResponseEntity<?> updateUser(@RequestBody Student std)
	{
		try {
			return new ResponseEntity<>(repos.save(std),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in student controller " + e);
		}
		throw new CourseNotFoundException("Student ID Invalid : record updation failed");

	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Integer id)
	{
		Optional<Student> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("Student ID Invalid : record deletion failed");

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
