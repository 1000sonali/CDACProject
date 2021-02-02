package com.app.pojos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@SuppressWarnings("serial")

@Entity
@Table(name="course")
public class Course implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	@Column(name="courseId")
	private Integer courseId;
	
	@Column(name="courseName",length=30)
	private String courseName;
	
	//one course many subjects
	@OneToMany(mappedBy="coursename", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("coursename")
	private List<Subject> subjects=new ArrayList<>();
	
	
	//many Notes one Course-----@Sonali
	@OneToMany(mappedBy="crsNotes",cascade=CascadeType.ALL)
	@JsonIgnoreProperties("crsNotes")
	private List<Notes> crsNt=new ArrayList<>();
	
	//many classroom one Course-----@Sonali
	@OneToMany(mappedBy="crsClassRoom",cascade=CascadeType.ALL)
	@JsonIgnoreProperties("crsClassRoom")
	private List<Classroom> crsClass=new ArrayList<>();
	
////Dependency of One Course---->Many DailySchedules
	@OneToMany(mappedBy="coursenamesub",cascade = CascadeType.ALL )
	@JsonIgnoreProperties("coursenamesub")
	private List<DailySchedule> dscrs=new ArrayList<>();
	

	//One Course many students
	@OneToMany(mappedBy="coursename", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("coursename")
	private List<Student> students=new ArrayList<>();


	public Integer getCourseId() {
		return courseId;
	}


	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}


	public String getCourseName() {
		return courseName;
	}


	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}


	public List<Subject> getSubjects() {
		return subjects;
	}


	public void setSubjects(List<Subject> subjects) {
		this.subjects = subjects;
	}


	public List<Notes> getCrsNt() {
		return crsNt;
	}


	public void setCrsNt(List<Notes> crsNt) {
		this.crsNt = crsNt;
	}


	public List<Classroom> getCrsClass() {
		return crsClass;
	}


	public void setCrsClass(List<Classroom> crsClass) {
		this.crsClass = crsClass;
	}


	public List<DailySchedule> getDscrs() {
		return dscrs;
	}


	public void setDscrs(List<DailySchedule> dscrs) {
		this.dscrs = dscrs;
	}


	public List<Student> getStudents() {
		return students;
	}


	public void setStudents(List<Student> students) {
		this.students = students;
	}


	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", courseName=" + courseName + ", subjects=" + subjects + ", crsNt="
				+ crsNt + ", crsClass=" + crsClass + ", dscrs=" + dscrs + ", students=" + students + "]";
	}
	
}
