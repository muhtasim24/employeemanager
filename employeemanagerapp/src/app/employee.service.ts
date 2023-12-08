import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // needs a get request to get the employees
  // tells the http client where to make the request 
  // this is going to be a get request
  // this is typescript so we have to put in the type we are expecting
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`)
  }

  //returning only 1 employee and adding an employee
  public addEmployee(employee: Employee): Observable<Employee> {
    // This is a post request to the url
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  // update an employee
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }

  // whenever we delete an employee we dont send anything back, we just send back HTTP status so its returning void
  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }
}