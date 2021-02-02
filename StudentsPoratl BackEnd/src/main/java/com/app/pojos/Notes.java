package com.app.pojos;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
@Embeddable
@Entity
@Table(name="notes")
public class Notes implements Serializable{
	
	//---Notes---notesID ,CourseId(FK),SubjId(FK),Link
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "nid", insertable = false, updatable = false)
	@JsonProperty("nid")
	private int notesID;
	
	@ManyToOne//(optional=false)
	@JoinColumn(name="crsId",nullable=false,updatable=false)
	@JsonIgnoreProperties("crsNt")
	private Course crsNotes;
	
	@Column(name="notelink", length=300)
	private String noteLink;

	public Notes() {
		super();
		// TODO Auto-generated constructor stub
	}



	public int getNotesID() {
		return notesID;
	}

	public void setNotesID(int notesID) {
		this.notesID = notesID;
	}

	public Course getCrsNotes() {
		return crsNotes;
	}

	public void setCrsNotes(Course crsNotes) {
		this.crsNotes = crsNotes;
	}

	

	public String getNoteLink() {
		return noteLink;
	}

	public void setNoteLink(String noteLink) {
		this.noteLink = noteLink;
	}

	
	
	
	
}
