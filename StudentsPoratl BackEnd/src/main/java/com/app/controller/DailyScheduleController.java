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
import com.app.pojos.Course;
import com.app.pojos.DailySchedule;
import com.app.repository.ICourseRepository;
import com.app.repository.IDailyScheduleRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/schedule")
@Validated
public class DailyScheduleController {

	@Autowired
	private IDailyScheduleRepository repos;

	public DailyScheduleController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> getAllSchedules()
	{
		List<DailySchedule> schedules=repos.findAll();
		return new ResponseEntity<>(new ResponseDTO("success","List of all schedules", schedules),HttpStatus.OK);

	}

	@GetMapping("/{uid}")
	public ResponseEntity<?> getById(@PathVariable Integer uid)
	{
		Optional<DailySchedule> opt=repos.findById(uid);
		if(opt.isPresent())
		{
			DailySchedule ds=opt.get();
			return new ResponseEntity<>(new ResponseDTO("success","Required schedule", ds),HttpStatus.OK);
		}
		ErrorResponse resp=new ErrorResponse("Invalid Id", "");
		return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);

	}

	@PutMapping()
	public ResponseEntity<?> updateDailySchedule(@RequestBody DailySchedule sch)
	{

		try {
			return new ResponseEntity<>(repos.save(sch),HttpStatus.OK);
		}
		catch(RuntimeException e) {
			System.out.println("err in schedule controller " + e);
		}
		throw new CourseNotFoundException("Schedule ID Invalid : record updation failed");

	}

	@PostMapping
	public ResponseEntity<?> addNewSchedule(@RequestBody DailySchedule newsch)
	{
		
		return new ResponseEntity<>(repos.save(newsch),HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteSchedule(@PathVariable Integer id)
	{
		Optional<DailySchedule> opt =repos.findById(id);
		if(opt.isPresent())
		{
			repos.deleteById(id);
			return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
		}
		throw new CourseNotFoundException("Schedule ID Invalid : record deletion failed");

	}
}
