package com.app.controller;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	public HomeController()
	{
		System.out.println("In constr..."+getClass().getName());
	}
@RequestMapping("/")
public String showWelcomePage()
{
	System.out.println("In show welcome page...");
	return "/index";
}
@RequestMapping("/hello")
public String showHelloPage()
{
	System.out.println("In hello page...");
	return "/hello";
}
}
