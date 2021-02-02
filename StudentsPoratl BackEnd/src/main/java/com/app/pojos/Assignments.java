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
@Table(name="assignments")
public class Assignments implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	@Column(name="assignNo")
	private int assignNo;
	
	@Column(name="assignName",length=30)
	private String assignName;
	
	@Column(name = "DateOfSubmission")
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm")
	private LocalDateTime endDateTime;
	
	////Dependency of Many Assignments---->One Subject
	@ManyToOne//(optional=false)
	@JoinColumn(name="subjectid",nullable=false,updatable=false)
	@JsonIgnoreProperties("assignments")
	private Subject subname;


	@Column(name="assignLink",length=300)
	private String assignLink;


	
	
	
	public int getAssignNo() {
		return assignNo;
	}


	public void setAssignNo(int assignNo) {
		this.assignNo = assignNo;
	}


	public String getAssignName() {
		return assignName;
	}


	public void setAssignName(String assignName) {
		this.assignName = assignName;
	}


	public Subject getSubname() {
		return subname;
	}


	public void setSubname(Subject subname) {
		this.subname = subname;
	}

	

	public LocalDateTime getEndDateTime() {
		return endDateTime;
	}


	public void setEndDateTime(LocalDateTime endDateTime) {
		this.endDateTime = endDateTime;
	}


	public String getAssignLink() {
		return assignLink;
	}


	public void setAssignLink(String assignLink) {
		this.assignLink = assignLink;
	}


	@Override
	public String toString() {
		return "Assignments [assignNo=" + assignNo + ", assignName=" + assignName + ", endDateTime=" + endDateTime
				+ ", subname=" + subname + ", assignLink=" + assignLink + "]";
	}

}
