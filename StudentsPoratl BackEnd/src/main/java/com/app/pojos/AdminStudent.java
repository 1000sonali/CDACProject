package com.app.pojos;

import java.io.Serializable;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name="adminstudent")
public class AdminStudent implements Serializable
{
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)	
private Integer prnNo;

@Column(name="firstname", length=30)
private String firstname;


@Column(name="lastname", length=30)
private String lastname;


public Integer getPrnNo() {
	return prnNo;
}


public void setPrnNo(Integer prnNo) {
	this.prnNo = prnNo;
}


public String getFirstname() {
	return firstname;
}


public void setFirstname(String firstname) {
	this.firstname = firstname;
}


public String getLastname() {
	return lastname;
}


public void setLastname(String lastname) {
	this.lastname = lastname;
}


@Override
public String toString() {
	return "AdminStudent [prnNo=" + prnNo + ", firstname=" + firstname + ", lastname=" + lastname + "]";
}
}