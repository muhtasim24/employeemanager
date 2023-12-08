import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // this is going to hold all the employees coming from the backend
  public employees!: Employee[];

  constructor(private employeeService: EmployeeService){}

  // this is going to run everytime this component is going to be called and call our getEmployees function
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
        // this is an observabe making a request over the internet, we need to call subscribe so we can be notified when data comes back from the server or an error
}
