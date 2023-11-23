package tech.mmushfiq.employeemanager.repo.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import tech.mmushfiq.employeemanager.exception.UserNotFoundException;
import tech.mmushfiq.employeemanager.model.Employee;
import tech.mmushfiq.employeemanager.repo.EmployeeRepo;

@Service
@Transactional
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }
    
    // method to add an employee 
    // need to create the employee in the database as well
    public Employee addEmployee(Employee employee) { 
        employee.setEmployeeCode(UUID.randomUUID().toString()); // this employee will get a random UUID
        return employeeRepo.save(employee);
    }

    // function to return a list of All employees
    public List<Employee> findAllEmployees() {
        return employeeRepo.findAll();
    }

    // function to update the employee
    public Employee updateEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    // function to find an Employee by id
    public Employee findEmployeeById(Long id) {
        return employeeRepo.findEmployeeById(id)
        .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    // function to delete an employee
    // pass in the id of the employee
    public void deleteEmployee(Long id) {
        // find the employee by the id, and if we dont throw out an error message
        employeeRepo.deleteEmployeeById(id);
    }
}