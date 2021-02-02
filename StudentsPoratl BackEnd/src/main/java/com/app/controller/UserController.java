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
import com.app.pojos.User;
import com.app.repository.IUserRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/user")
@Validated
public class UserController {
@Autowired
private IUserRepository repos;


public UserController()
{
	System.out.println("In constr of:: "+getClass().getName());
}

@GetMapping
public ResponseEntity<?> getAllUsers()
{
	List<User> users=repos.findAll();

	return new ResponseEntity<>(new ResponseDTO("success","List of all courses", users),HttpStatus.OK);

}

@GetMapping("/{uid}")
public ResponseEntity<?> getById(@PathVariable Integer uid)
{
	Optional<User> opt=repos.findById(uid);
	if(opt.isPresent())
	{
		User usr=opt.get();
		return new ResponseEntity<>(new ResponseDTO("success","Required course", usr),HttpStatus.OK);
	}
	ErrorResponse resp=new ErrorResponse("Invalid Id", "");
	return new ResponseEntity<>(new ResponseDTO("fail","Didn't get the element", null),HttpStatus.OK);
}

@PutMapping()
public ResponseEntity<?> updateUser(@RequestBody User usr)
{
	System.out.println(usr.getUserid());
	try {
		return new ResponseEntity<>(repos.save(usr),HttpStatus.OK);
	}
	catch(RuntimeException e) {
		System.out.println("err in user controller " + e);
	}
	throw new CourseNotFoundException("User ID Invalid : record updation failed");

}

@PostMapping
public ResponseEntity<?> addNewUser(@RequestBody User newUser)
{
	
	return new ResponseEntity<>(repos.save(newUser),HttpStatus.OK);
}

@DeleteMapping("/{id}")
public ResponseEntity<?> deleteUser(@PathVariable Integer id)
{
	Optional<User> opt =repos.findById(id);
	if(opt.isPresent())
	{
		repos.deleteById(id);
		return new ResponseEntity<>(new ResponseDTO("success","successfully deleted", id),HttpStatus.OK);
	}
	throw new CourseNotFoundException("User ID Invalid : record deletion failed");
}


}
