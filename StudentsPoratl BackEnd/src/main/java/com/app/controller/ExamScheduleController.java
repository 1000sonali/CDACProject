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
import com.app.pojos.ExamSchedule;
import com.app.pojos.Faculty;
import com.app.repository.IExamRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/exam")
@Validated
public class ExamScheduleController {

	@Autowired
	private IExamRepository repos;

	public ExamScheduleController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> getAllExams()
	{
		List<ExamSchedule> exams=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all exams", exams),HttpStatus.OK);

	}

	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<ExamSchedule> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			ExamSchedule exm=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required exam", exm),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
	}

	@PutMapping()
	public ResponseEntity<?> updateExam(@RequestBody ExamSchedule exams)
	{
		try {
			return new ResponseEntity<>(repos.save(exams),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in exam controller " + e);
		}
		throw new CourseNotFoundException("Exam ID Invalid : record updation failed");
	}

	@PostMapping
	public ResponseEntity<?> addNewCourse(@RequestBody ExamSchedule exam)
	{
		
		return new ResponseEntity<>(repos.save(exam),HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteExam(@PathVariable Integer id)
	{
		Optional<ExamSchedule> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("Exam ID Invalid : record deletion failed");
	}
}
