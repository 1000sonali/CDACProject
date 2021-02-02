package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="placements")
public class Placement {
	@Id
	@Column(length=20)
	private String PRN;
	@Column(length=20)
	private String coursename;
	@Column(length=20)
	private String batch;
	@Column(length=20)
	private String studentname;
	@Column(length=20)
	private String companyname;
	
	
	

	public String getPRN() {
		return PRN;
	}

	public void setPRN(String pRN) {
		PRN = pRN;
	}

	public String getCoursename() {
		return coursename;
	}


	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}


	public String getBatch() {
		return batch;
	}


	public void setBatch(String batch) {
		this.batch = batch;
	}


	public String getCompanyname() {
		return companyname;
	}


	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}


	public String getStudentname() {
		return studentname;
	}


	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}

	@Override
	public String toString() {
		return "Placement [PRN=" + PRN + ", coursename=" + coursename + ", batch=" + batch + ", studentname="
				+ studentname + ", companyname=" + companyname + "]";
	}
	
	
	
}
