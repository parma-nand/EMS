package com.employee.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
