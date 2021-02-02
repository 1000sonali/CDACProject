package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="user")
public class User {
	@Id
	@JsonProperty("userid")
	private Integer userid;
	
	@NotBlank(message="password is required")
	@Column(name="pwd",length=20)
	private String password;
	
	@Column(name="role",length=20)
	@NotBlank(message="role is required")
	private String role;
	
	
	
	public User() {
		super();
	}
	public User(Integer userid, @NotBlank(message = "password is required") String password,
			@NotBlank(message = "role is required") String role) {
		super();
		this.userid = userid;
		this.password = password;
		this.role = role;
	}
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "User [userid=" + userid + ", password=" + password + ", role=" + role + "]";
	}
	
	
	
}
