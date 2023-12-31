package tech.mmushfiq.employeemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.mmushfiq.employeemanager.model.Employee;
import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    // query method
    void deleteEmployeeById(Long id);

    Optional<Employee> findEmployeeById(Long id);


}