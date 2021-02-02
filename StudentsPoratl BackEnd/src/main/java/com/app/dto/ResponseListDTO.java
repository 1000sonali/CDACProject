package com.app.dto;

import java.time.LocalDateTime;
import java.util.List;

public class ResponseListDTO {
	private String status;
	private String message;
	private LocalDateTime ts;
	private List<?> data;
	public ResponseListDTO() {
		// TODO Auto-generated constructor stub
	}
	public ResponseListDTO(String status,String message,List<?> data) {
		super();
		this.status=status;
		this.message = message;
		this.data=data;
		this.ts=LocalDateTime.now();
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
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
	public List<?> getData() {
		return data;
	}
	public void setData(List<?> data) {
		this.data = data;
	}
}
