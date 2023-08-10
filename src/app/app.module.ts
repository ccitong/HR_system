import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmployeeMainMenuComponent } from './components/employee-main-menu/employee-main-menu.component';
import { JobsMainMenuComponent } from './components/jobs-main-menu/jobs-main-menu.component';
import { UpdateemployeeMainMenuComponent } from './components/update-employee-menu/updateemployee-main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EmployeeMainMenuComponent,
    JobsMainMenuComponent,
    UpdateemployeeMainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
