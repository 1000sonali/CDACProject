package com.app.controller;

import java.util.Random;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.pojos.Email;
import com.app.pojos.User;
@CrossOrigin(origins="http://localhost:4200")
@RestController


public class SendMailController {

	@Autowired
	private JavaMailSender sender;
	
	
	private UserController userctrler=new UserController();
	
	
	public SendMailController()
	{
		System.out.println("In constr of:: "+getClass().getName());
	}


	
	@PostMapping("/emailuser/{id}")
	public ResponseEntity<?> sendmailproject(@RequestBody @Valid String str, @PathVariable int id)
		{
		
		String pass=this.generateRandomString();
		
		System.out.println(str);
		Email em=new Email();
		SimpleMailMessage mesg=new SimpleMailMessage();
		mesg.setTo(str);
		mesg.setSubject("Mail from our project");
		mesg.setText("Your password is:: "+pass);
		System.out.println("process");
		sender.send(mesg);
		System.out.println("mail sent");
		System.out.println("updated");
	return new ResponseEntity<>(new ResponseDTO("success", "mail sent", pass),HttpStatus.OK);
	}

	public String generateRandomString() {
	    int leftLimit = 97; // letter 'a'
	    int rightLimit = 122; // letter 'z'
	    int targetStringLength = 10;
	    Random random = new Random();

	    String generatedString = random.ints(leftLimit, rightLimit + 1)
	      .limit(targetStringLength)
	      .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
	      .toString();

	    System.out.println(generatedString);
	    return generatedString;
	}

}
