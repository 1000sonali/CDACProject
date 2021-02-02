
package com.app.pojos;

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
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
@Embeddable
@Entity
@Table(name="classroom")
public class Classroom {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "classId", insertable = false, updatable = false)
	@JsonProperty("classid")
	private int classID;
	
	@ManyToOne//(optional=false)
	@JoinColumn(name="courseId",nullable=false,updatable=false)
	@JsonIgnoreProperties("crsClass")
	private Course crsClassRoom;
	

	@Column(name="classRoomId", length=30)
	private String classRoomId;
	
	@Column(name="classRoomPwd", length=30)
	private String classRoomPwd;


	public int getClassID() {
		return classID;
	}


	public void setClassID(int classID) {
		this.classID = classID;
	}


	public Course getCrsClassRoom() {
		return crsClassRoom;
	}


	public void setCrsClassRoom(Course crsClassRoom) {
		this.crsClassRoom = crsClassRoom;
	}


	
	public String getClassRoomId() {
		return classRoomId;
	}


	public void setClassRoomId(String classRoomId) {
		this.classRoomId = classRoomId;
	}


	public String getClassRoomPwd() {
		return classRoomPwd;
	}


	public void setClassRoomPwd(String classRoomPwd) {
		this.classRoomPwd = classRoomPwd;
	}


	@Override
	public String toString() {
		return "Classroom [classID=" + classID + ", crsClassRoom=" + crsClassRoom + ", classRoomId=" + classRoomId
				+ ", classRoomPwd=" + classRoomPwd + "]";
	}


}
