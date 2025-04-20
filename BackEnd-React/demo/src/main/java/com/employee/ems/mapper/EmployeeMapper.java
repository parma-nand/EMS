package com.employee.ems.mapper;

import com.employee.ems.dto.EmployeeDto;
import com.employee.ems.entity.Employee;

public class EmployeeMapper {
	public static EmployeeDto mapToEmployeeDto(Employee employeeex) {
		
		return new EmployeeDto(
				employeeex.getId(),
				employeeex.getFirstName(),
				employeeex.getLastName(),
				employeeex.getEmail()
				
				);
	}
public static Employee mapToEmployee(EmployeeDto employeeDto) {
		
		return new Employee(
				employeeDto.getId(),
				employeeDto.getFirstName(),
				employeeDto.getLastName(),
				employeeDto.getEmail()		
				);
	}

}
