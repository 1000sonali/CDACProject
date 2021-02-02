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
@Table(name="contactnumber")

public class Contactnumber {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	@Column(name="contactId")
	private Integer contactId;
	
	@Column(name="contactNo1",length=100)
	private String contactNo1;
	
	@Column(name="contactNo2",length=100)
	private String contactNo2;
	
	@Column(name="contactNo3",length=100)
	private String contactNo3;

	public Contactnumber() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Contactnumber(Integer contactId, String contactNo1, String contactNo2, String contactNo3) {
		super();
		this.contactId = contactId;
		this.contactNo1 = contactNo1;
		this.contactNo2 = contactNo2;
		this.contactNo3 = contactNo3;
	}

	public Integer getContactId() {
		return contactId;
	}

	public void setContactId(Integer contactId) {
		this.contactId = contactId;
	}

	public String getContactNo1() {
		return contactNo1;
	}

	public void setContactNo1(String contactNo1) {
		this.contactNo1 = contactNo1;
	}

	public String getContactNo2() {
		return contactNo2;
	}

	public void setContactNo2(String contactNo2) {
		this.contactNo2 = contactNo2;
	}

	public String getContactNo3() {
		return contactNo3;
	}

	public void setContactNo3(String contactNo3) {
		this.contactNo3 = contactNo3;
	}

	@Override
	public String toString() {
		return "Contactnumber [contactId=" + contactId + ", contactNo1=" + contactNo1 + ", contactNo2=" + contactNo2
				+ ", contactNo3=" + contactNo3 + "]";
	}
	
	
}
