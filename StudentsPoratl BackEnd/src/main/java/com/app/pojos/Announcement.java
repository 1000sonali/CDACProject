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
@Table(name="announcement")
public class Announcement {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	@Column(name="ansmId")
	private Integer ansmId;
	
	@Column(name="ansmName",length=500)
	private String ansmName;

	

	public Announcement() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Announcement(Integer ansmId, String ansmName) {
		super();
		this.ansmId = ansmId;
		this.ansmName = ansmName;
	}


	public Integer getAnsmId() {
		return ansmId;
	}


	public void setAnsmId(Integer ansmId) {
		this.ansmId = ansmId;
	}


	public String getAnsmName() {
		return ansmName;
	}


	public void setAnsmName(String ansmName) {
		this.ansmName = ansmName;
	}


	@Override
	public String toString() {
		return "Announcement [ansmId=" + ansmId + ", ansmName=" + ansmName + "]";
	}

	
	
}
