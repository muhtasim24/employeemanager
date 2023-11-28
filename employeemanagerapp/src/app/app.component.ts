import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// once we implement on init 
export class AppComponent implements OnInit{
  title = 'employeemanagerapp';

  // this is going to hold all the employees coming from the backend
  public employees!: Employee[];

  constructor(private employeeSerivce: EmployeeService) {}

  // this is going to run everytime this component is going to be called and call our getEmployees function
  ngOnInit(): void {
      this.getEmployees();
  }
  public getEmployees(): void {
    this.employeeSerivce.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    // this is an observabe making a request over the internet, we need to call subscribe so we can be notified when data comes back from the server or an error
  }

}
