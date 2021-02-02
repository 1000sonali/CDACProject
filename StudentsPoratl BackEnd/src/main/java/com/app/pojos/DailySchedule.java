package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDateTime;

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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@SuppressWarnings("serial")
@Embeddable
@Entity
@Table(name="dailyschedule")
public class DailySchedule implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	@Column(name="dailyID")
	private int dailyId;
	
	@Column(name = "startDateTime" )
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm")
	private LocalDateTime startDateTime;
	
	@Column(name = "endDateTime")
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm")
	private LocalDateTime endDateTime;
	
	@Column(name="dailyschlink", length=300)
	private String dailySchLink;
	
	@Column(name="subj",length=20)
	private String subject;

	//Dependency of Many DailySchedules---->One Course
	@ManyToOne//(optional=false)
	@JoinColumn(name="courseId",nullable=false,updatable=false)
	@JsonIgnoreProperties("dscrs")
	private Course coursenamesub;



	public int getDailyId() {
		return dailyId;
	}


	public void setDailyId(int dailyId) {
		this.dailyId = dailyId;
	}


	public LocalDateTime getStartDateTime() {
		return startDateTime;
	}


	public void setStartDateTime(LocalDateTime startDateTime) {
		this.startDateTime = startDateTime;
	}


	public LocalDateTime getEndDateTime() {
		return endDateTime;
	}


	public void setEndDateTime(LocalDateTime endDateTime) {
		this.endDateTime = endDateTime;
	}


	public String getDailySchLink() {
		return dailySchLink;
	}


	public void setDailySchLink(String dailySchLink) {
		this.dailySchLink = dailySchLink;
	}


	

	public Course getCoursenamesub() {
		return coursenamesub;
	}


	public void setCoursenamesub(Course coursenamesub) {
		this.coursenamesub = coursenamesub;
	}


	public String getSubject() {
		return subject;
	}


	public void setSubject(String subject) {
		this.subject = subject;
	}


	@Override
	public String toString() {
		return "DailySchedule [dailyId=" + dailyId + ", startDateTime=" + startDateTime + ", endDateTime=" + endDateTime
				+ ", dailySchLink=" + dailySchLink + ", subject=" + subject + ", coursenamesub=" + coursenamesub + "]";
	}


	
	
}
