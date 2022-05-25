import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginteacherComponent } from './login/loginteacher/loginteacher.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { Content1Component } from './student/content1/content1.component';
import { Content2Component } from './student/content2/content2.component';
import { Content3Component } from './student/content3/content3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginteacherComponent,
    StudentComponent,
    AdminComponent,
    Content1Component,
    Content2Component,
    Content3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
