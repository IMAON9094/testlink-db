import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
    email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
    password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angForm1:any){
    this.dataService.userlogin(angForm1.value.email,angForm1.value.password).pipe(first()).subscribe(
    data => {
      //const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
      //this.router.navigate([redirect]);
      this.router.navigate(['student']);
    },
    error => {
      console.log(angForm1.value);
      alert("User name or password is incorrect")
    });
    }
    get email() { return this.angForm.get('email'); }
    get password() { return this.angForm.get('password'); }


  /*

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
*/
  submitclick(){
    this.router.navigate(['student']);
  }

}
