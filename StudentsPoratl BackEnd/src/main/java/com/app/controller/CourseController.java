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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom.CourseNotFoundException;
import com.app.dto.ErrorResponse;
import com.app.dto.ResponseDTO;
import com.app.pojos.Course;
import com.app.pojos.Email;
import com.app.repository.ICourseRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/course")
@Validated
public class CourseController {

	@Autowired
	private ICourseRepository repos;
	@Autowired
	private JavaMailSender sender;
	
	public CourseController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> getAllCourses()
	{
		List<Course> courses=repos.findAll();
		//sendmailmethod("aartimadre@gmail.com");
		return new ResponseEntity<>(new ResponseDTO("success","List of all courses", courses),HttpStatus.OK);

	}

	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<Course> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			Course crs=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required course", crs),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}

	@PutMapping()
	public ResponseEntity<?> updateCourse(@RequestBody Course course)
	{
		try {
			System.out.println(course);
			return new ResponseEntity<>(repos.save(course),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in course controller " + e);
		}
		throw new CourseNotFoundException("Course ID Invalid : record updation failed");
	}
	
	@PostMapping
	
	//@RequestMapping(value = "/course", method = RequestMethod.POST)
	public ResponseEntity<?> addNewCourse(@RequestBody Course newCourse)
		{
		
		return new ResponseEntity<>(repos.save(newCourse),HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteCourse(@PathVariable Integer id)
	{
		Optional<Course> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("Course ID Invalid : record deletion failed");

	}

	
	@GetMapping("/sendmail/{str}")
	public ResponseEntity<?> sendmail(@PathVariable String str)
	{
		System.out.println("Into sendmail get method");
		sendmailmethod(str);
		return new ResponseEntity<>(new ResponseDTO("success","Mail sent", null),HttpStatus.OK);
		
	}

	
public void sendmailmethod(String str )
{
	
	System.out.println(str);
	SimpleMailMessage mesg=new SimpleMailMessage();
	mesg.setTo(str);
	mesg.setSubject("Mail from our project");
	mesg.setText("Working using front end");
	System.out.println("process");
	sender.send(mesg);
	System.out.println("mail sent");
	
}

}
