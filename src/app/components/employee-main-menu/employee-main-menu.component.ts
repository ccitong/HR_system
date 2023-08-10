import { Component, OnInit } from '@angular/core';
import  Employee  from 'src/app/models/Employee';
import Department from 'src/app/models/Department';
import Job from 'src/app/models/Job';
import Manager from 'src/app/models/Manager';
import ApiResponse from 'src/app/models/ApiResponse';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employee-main-menu',
  templateUrl: './employee-main-menu.component.html',
  styleUrls: ['./employee-main-menu.component.css']
})
export class EmployeeMainMenuComponent implements OnInit {
  
  today = new Date();
  formattedHireDate: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  //const cValue = formatDate(this.hire_date, 'yyyy-MM-dd', 'en-US');
  employee:Employee = {employee_id: 0, first_name:"", last_name:"", email:"", phone: "",hire_date: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()),job_id:"", salary: 0.0, 
 manager_id:0, department_id:0,commission_pct:""}
  
  //selectedJob_id: string = ''; // The selected option from the dropdown

  job_id_options: Job[] = [];


  //selectedManager_id: string = ''; // The selected option from the dropdown

  manager_id_options: Manager[] = [];
  

  //selectedDepartment_id: string = ''; // The selected option from the dropdown

  department_id_options: Department[] = [];

constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchJobs();
    this.fetchDepartments();
    this.fetchManagers();
  }


  fetchJobs(): void {
      this.api.getAllJobs().subscribe(
        (apiData: any[]) => {
          // Assuming the apiData is the array you received from the API
          this.job_id_options = apiData.map((jobData: any[]) => {
            return {
              job_id: jobData[0],
              job_title: jobData[1],
              min_salary: jobData[2],
              max_salary: jobData[3],
            };
          });
          console.log(this.job_id_options);
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        }
      );
    }

    fetchManagers(): void {
      this.api.getAllManagers().subscribe(
        (apiData: any[]) => {
          // Assuming the apiData is the array you received from the API
          this.manager_id_options = apiData.map((managerData: any[]) => {
            return {
              employee_id: managerData[0],
              first_name: managerData[1],
              last_name: managerData[2],
              
            };
          });
          console.log(this.manager_id_options);
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        }
      );
    }

    fetchDepartments(): void {
      this.api.getAllDepartments().subscribe(
        (apiData: any[]) => {
          // Assuming the apiData is the array you received from the API
          this.department_id_options = apiData.map((departmentData: any[]) => {
            return {
              department_id: departmentData[0],
              department_name: departmentData[1],
              manager_id: departmentData[2],
              location_id: departmentData[3],
            };
          });
          console.log(this.department_id_options);
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        }
      );
    }
  
  addBtnPressed = () => {
    console.log("Add button pressed!")
    console.log(`Value in firstName from field :${this.employee.first_name}`)
    console.log(`Value in lastName from field :${this.employee.last_name}`)
    console.log(`Value in email from field :${this.employee.email}`)
    console.log(`Value in Salary from field :${this.employee.salary}`)
    console.log(`Value in phone from field :${this.employee.phone}`)
    console.log(`Value in jobID from field :${this.employee.job_id}`)
    console.log(`Value in ManagerID from field :${this.employee.manager_id}`)
    console.log(`Value in DepartmentID from field :${this.employee.department_id}`)
    console.log(`Value in HireDate from field :${this.employee.hire_date}`)
    console.log('Value in this employee:', JSON.stringify(this.employee));
   
    this.http.post<ApiResponse>('http://127.0.0.1:5000/api/addemployee',(this.employee)).subscribe(response =>{
      console.log(response);
      this.errorMessage = '';
      this.successMessage = response.message;
    }, error =>{
      console.log(error);
      this.errorMessage = error.error.error;
      console.log(error.error.error)
    });
  }

  formatDate(event: any) {
    const formattedDate = new Date(event).toISOString().split('T')[0];
    this.formattedHireDate = formattedDate;
    this.employee.hire_date = new Date(event);
  }

}
