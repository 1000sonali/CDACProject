package com.app.pojos;



import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name="examschedule")
public class ExamSchedule {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	private int schNo;
	
	@Column(name = "startDateTime")
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm")
	private LocalDateTime startDateTime;
	
	@Column(name = "endDateTime")
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm")
	private LocalDateTime endDateTime;
	
	@Column(name = "examsub")
	@NotBlank(message=" subject name must be supplied")
	private String examSubject;
	
	@Column(name = "examlink")
	@NotBlank(message=" link name must be supplied")
	private String examLink;




	public int getSchNo() {
		return schNo;
	}

	public void setSchNo(int schNo) {
		this.schNo = schNo;
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

	public String getExamSubject() {
		return examSubject;
	}

	public void setExamSubject(String examSubject) {
		this.examSubject = examSubject;
	}

	public String getExamLink() {
		return examLink;
	}

	public void setExamLink(String examLink) {
		this.examLink = examLink;
	}

	@Override
	public String toString() {
		return "ExamSchedule [schNo=" + schNo + ", startDateTime=" + startDateTime + ", endDateTime=" + endDateTime
				+ ", examSubject=" + examSubject + ", examLink=" + examLink + "]";
	}
	

}