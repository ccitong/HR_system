import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmployeeMainMenuComponent } from './components/employee-main-menu/employee-main-menu.component';
import { JobsMainMenuComponent } from './components/jobs-main-menu/jobs-main-menu.component';
import { UpdateemployeeMainMenuComponent } from './components/update-employee-menu/updateemployee-main-menu.component';

const routes: Routes = [
  {path:"employee", component: EmployeeMainMenuComponent},
  {path:"jobs", component: JobsMainMenuComponent},
  {path:"updateemployee", component: UpdateemployeeMainMenuComponent},
  {path:"", component: HomePageComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
