package com.employee.ems.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class RecordNotPresentException extends RuntimeException {
	
	
	public RecordNotPresentException(String message) {
		super(message);
	}

}
