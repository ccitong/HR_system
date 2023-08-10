import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Job from '../models/Job';
import Department from '../models/Department';
import Manager from '../models/Manager';
import Employee from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllJobs =(): Observable<Job[]>=>{
    console.log("Retrieving all Jobs Information from DB")
    return this.http.get<Job[]>("http://127.0.0.1:5000/api/getjobs")    
  }

  getAllDepartments =(): Observable<Department[]>=>{
    console.log("Retrieving all Deparments Information from DB")
    return this.http.get<Department[]>("http://127.0.0.1:5000/api/getdepartments")    
  }

  getAllManagers =(): Observable<Manager[]>=>{
    console.log("Retrieving all Manager Information from DB")
    return this.http.get<Manager[]>("http://127.0.0.1:5000/api/getmanagers")    
  }

  getAllEmployees =(): Observable<Employee[]>=>{
    console.log("Retrieving all Manager Information from DB")
    return this.http.get<Employee[]>("http://127.0.0.1:5000/api/getemployees")    
  }
}