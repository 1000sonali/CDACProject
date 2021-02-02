package com.app.dto;

import java.time.LocalDateTime;

public class ResponseDTO {
	private String status;
	private String message;
	private LocalDateTime ts;
	private Object data;
	public ResponseDTO() {
		// TODO Auto-generated constructor stub
	}
	public ResponseDTO(String status,String message,Object data) {
		super();
		this.status=status;
		this.message = message;
		this.data=data;
		this.ts=LocalDateTime.now();
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public LocalDateTime getTs() {
		return ts;
	}
	public void setTs(LocalDateTime ts) {
		this.ts = ts;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
}
