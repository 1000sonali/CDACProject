package com.app.pojos;

import java.io.Serializable;
import java.lang.annotation.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
@Embeddable
@Entity
@Table(name="subjects")
public class Subject implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "sid", insertable = false, updatable = false)
	@JsonProperty("subjectId")
	private int subjectId;
	
	@Column(name="sname", length=30)
	@JsonProperty("subjectName")
	private String subjectName;
	
	//many subject one course
	@ManyToOne//(optional=false)
	@JoinColumn(name="courseId",nullable=false,updatable=false)
	@JsonIgnoreProperties("subjects")
	@JsonProperty("courseId")
	private Course coursename;
	
	//many subject one faculty
	@ManyToOne(optional=false)
	@JoinColumn(name="facultyid" ,nullable=false,updatable=false)
	@JsonIgnoreProperties("teachingSubj")
	@JsonProperty("facultyId")
	private Faculty faculty;
	
	
	//many test one subject
	@OneToMany(mappedBy="subj",cascade=CascadeType.ALL)
	private List<Test> tests=new ArrayList<>();
	

	//one subject many assignments
	@OneToMany(mappedBy="subname",cascade=CascadeType.ALL)
	@JsonIgnoreProperties("subname")
	private List<Assignments> assignments=new ArrayList<>();
	
	
	
	public int getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(int subjecId) {
		this.subjectId = subjecId;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public Course getCoursename() {
		return coursename;
	}

	public void setCoursename(Course coursenamesub) {
		this.coursename = coursenamesub;
	}

	public Faculty getFaculty() {
		return faculty;
	}

	public void setFaculty(Faculty faculty) {
		this.faculty = faculty;
	}

	
	

	public List<Test> getTests() {
		return tests;
	}



	public void setTests(List<Test> tests) {
		this.tests = tests;
	}



	public List<Assignments> getAssignments() {
		return assignments;
	}



	public void setAssignments(List<Assignments> assignments) {
		this.assignments = assignments;
	}

	@Override
	public String toString() {
		return "Subject [subjectId=" + subjectId + ", subjectName=" + subjectName + ", coursename=" + coursename
				+ ", faculty=" + faculty + ", tests=" + tests + ", assignments=" + assignments + "]";
	}


	
}
