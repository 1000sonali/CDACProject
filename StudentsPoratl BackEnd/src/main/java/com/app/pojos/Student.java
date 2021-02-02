package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
@Embeddable
@Entity
@Table(name="student")
public class Student implements Serializable{
	@Id
	@Column(name = "prn",updatable = false)
	private Integer PRN;
	//P.L validation rules (OR validation rules in back end)
	
	@Column(name = "fname")
	@NotBlank(message="name must be supplied")
	private String fname;
	
	@Column(name = "lname")
	@NotBlank(message="name must be supplied")
	private String lname;
	
	@Column(name = "dob")
	@JsonFormat(pattern="yyyy-MM-dd")
	@Past(message = "DoB must be in the past....")
	private LocalDate dob;
	
	@SuppressWarnings("deprecation")
	@Email(message = "Email should be valid")
	@Column(name = "email")
	@NotBlank(message="person email-id must be supplied")
	private String email;
	
	@Column(length=13)
	private String phno;
	
	
	@NotBlank(message="address  can't be blank")
	@Column(name = "addr", length = 30)
	private String address;

	@Column(name="fees")
	private double courseFees;
	
	//many students one course
	@ManyToOne(optional=false)
	@JoinColumn(name="courseId",nullable=false,updatable=false)
	@JsonIgnoreProperties("students")
	private Course coursename;

	
	

	public Integer getpId() {
		return PRN;
	}


	public void setpId(Integer pId) {
		this.PRN = pId;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public LocalDate getDob() {
		return dob;
	}


	public void setDob(LocalDate dob) {
		this.dob = dob;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhno() {
		return phno;
	}


	public void setPhno(String phno) {
		this.phno = phno;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public double getCourseFees() {
		return courseFees;
	}


	public void setCourseFees(double courseFees) {
		this.courseFees = courseFees;
	}


	public Course getCoursename() {
		return coursename;
	}


	public void setCoursename(Course coursename) {
		this.coursename = coursename;
	}


	@Override
	public String toString() {
		return "Student [pId=" + PRN + ", fname=" + fname + ", lname=" + lname + ", dob=" + dob + ", email=" + email
				+ ", phno=" + phno + ", address=" + address + ", courseFees=" + courseFees + ", coursename="
				+ coursename + "]";
	}

	
	
	
	
	
	
}
