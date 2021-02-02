	package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
@Entity
@Table(name="faculty")
public class Faculty implements Serializable{
	@Id
	@Column(name = "facultyId")
	private Integer facultyid;
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

	@OneToMany(mappedBy = "faculty",cascade=CascadeType.ALL)
	@JsonIgnoreProperties("faculty")
	private List<Subject> teachingSubj=new ArrayList<>();


	public Integer getpId() {
		return facultyid;
	}

	public void setpId(Integer pId) {
		this.facultyid = pId;
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

	
	public Integer getFacultyid() {
		return facultyid;
	}






	public void setFacultyid(Integer facultyid) {
		this.facultyid = facultyid;
	}






	public List<Subject> getTeachingSubj() {
		return teachingSubj;
	}






	public void setTeachingSubj(List<Subject> teachingSubj) {
		this.teachingSubj = teachingSubj;
	}




	@Override
	public String toString() {
		return "Faculty [facultyid=" + facultyid + ", fname=" + fname + ", lname=" + lname + ", dob=" + dob + ", email=" + email
				+ ", phno=" + phno + ", address=" + address + ", teachingSubj=" + teachingSubj + "]";
	}

	
	
	
}
