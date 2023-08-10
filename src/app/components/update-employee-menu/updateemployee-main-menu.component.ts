import { Component, OnInit } from '@angular/core';
import  Employee  from 'src/app/models/Employee';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import ApiResponse from 'src/app/models/ApiResponse';
@Component({
  selector: 'app-departments-main-menu',
  templateUrl: './updateemployee-main-menu.component.html',
  styleUrls: ['./updateemployee-main-menu.component.css']
})


export class UpdateemployeeMainMenuComponent implements OnInit {

  
  errorMessage: string = '';
  successMessage: string = '';
  
  today = new Date();
  employee:Employee = {employee_id: 0, first_name:"", last_name:"", email:"", phone: "",hire_date: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()),job_id:"", salary: 0.0, 
 manager_id:0, department_id:0,commission_pct:""}

 employee_id_options: Employee[] = [];
  constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.api.getAllEmployees().subscribe(
      (apiData: any[]) => {
        // Assuming the apiData is the array you received from the API
        this.employee_id_options = apiData.map((employeeData: any[]) => {
          return {
            employee_id: employeeData[0],
            first_name: employeeData[1],
            last_name: employeeData[2],
            email: employeeData[3],
            phone: employeeData[4],
            hire_date: employeeData[5],
            job_id: employeeData[6],
            salary:employeeData[7],
            commission_pct:employeeData[8],
            manager_id:employeeData[9],
            department_id:employeeData[10],

          };
        });
        console.log(this.employee_id_options);
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

    console.log('Value in this employee:', JSON.stringify(this.employee));
   
    // this.http.post('http://127.0.0.1:5000/api/updateemployee',(this.employee)).subscribe(response =>{
    //   console.log(response);
    //   this.errorMessage = ''
    //   this.successMessage = response.message.toISOString();
    // }, (error) =>{
    //   console.log(error);
    //   this.errorMessage = error.error.error;
    //   console.log(error.error.error)
    // });


    this.http.post<ApiResponse>('http://127.0.0.1:5000/api/updateemployee', this.employee).subscribe(
  (response) => {
    console.log(response);
    this.errorMessage = '';
    this.successMessage = response.message;
  },
  (error) => {
    console.log(error);
    this.errorMessage = error.error.error;
    console.log(error.error.error);
  }
);
  }


  onSelectEmployee() {
    console.log("select an employee to update")
    console.log(`Value in employee from field :${this.employee.employee_id}`)
    console.log(`Value in firstName from field :${this.employee.first_name}`)
    console.log(`Value in lastName from field :${this.employee.last_name}`)
    console.log(`Value in email from field :${this.employee.email}`)
    console.log(`Value in Salary from field :${this.employee.salary}`)
    console.log(`Value in phone from field :${this.employee.phone}`)
    console.log(`Value in jobID from field :${this.employee.job_id}`)
    for(let i = 0; i < this.employee_id_options.length; i++){
      if(this.employee_id_options[i].employee_id == this.employee.employee_id){
        console.log(i)
        this.employee.first_name= this.employee_id_options[i].first_name;
        this.employee.last_name= this.employee_id_options[i].last_name;
        this.employee.email= this.employee_id_options[i].email;
        this.employee.salary= this.employee_id_options[i].salary;
        this.employee.hire_date= this.employee_id_options[i].hire_date;
        this.employee.phone= this.employee_id_options[i].phone;
        this.employee.job_id= this.employee_id_options[i].job_id;
        this.employee.manager_id= this.employee_id_options[i].manager_id;
        this.employee.department_id= this.employee_id_options[i].department_id;
      }
    }
    console.log("After")
    console.log(`Value in employee from field :${this.employee.employee_id}`)
    console.log(`Value in firstName from field :${this.employee.first_name}`)
    console.log(`Value in lastName from field :${this.employee.last_name}`)
    console.log(`Value in email from field :${this.employee.email}`)
    console.log(`Value in Salary from field :${this.employee.salary}`)
    console.log(`Value in phone from field :${this.employee.phone}`)
    console.log(`Value in jobID from field :${this.employee.job_id}`)
  }

}
