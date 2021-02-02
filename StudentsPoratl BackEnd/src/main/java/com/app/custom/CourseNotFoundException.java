package com.app.custom;

@SuppressWarnings("serial")
public class CourseNotFoundException extends RuntimeException {
	public CourseNotFoundException(String mesg) {
		super(mesg);
	}
}
