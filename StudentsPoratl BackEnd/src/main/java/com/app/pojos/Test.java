package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

@SuppressWarnings("serial")
@Embeddable
@Entity
@Table(name="test")
public class Test implements Serializable{
	@Id
	@Column(name="testID",length=20)
	private int testId;
	@Column(name = "startDateTime" ,insertable=false,updatable=false)
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDate startTest;

	@Column(name = "endDateTime" ,insertable=false,updatable=false)
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDate endTest;

	@ManyToOne
	@JoinColumn(name="subjectid",nullable=false)
	private Subject subj;

	@Column(name="testlink")
	private String TestLink;

	
	public int getTestId() {
		return testId;
	}
	
	public void setTestId(int testId) {
		this.testId = testId;
	}
	
	public LocalDate getStartTest() {
		return startTest;
	}
	
	public void setStartTest(LocalDate startTest) {
		this.startTest = startTest;
	}
	
	public LocalDate getEndTest() {
		return endTest;
	}
	
	public void setEndTest(LocalDate endTest) {
		this.endTest = endTest;
	}
	
	public Subject getSubj() {
		return subj;
	}
	
	public void setSubj(Subject subj) {
		this.subj = subj;
	}
	
	public String getTestLink() {
		return TestLink;
	}
	
	public void setTestLink(String testLink) {
		TestLink = testLink;
	}
	
	@Override
	public String toString() {
		return "Test [testId=" + testId + ", startTest=" + startTest + ", endTest=" + endTest + ", subj=" + subj
				+ ", TestLink=" + TestLink + "]";
	}
	
	


}
