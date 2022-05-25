import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginteacher',
  templateUrl: './loginteacher.component.html',
  styleUrls: ['./loginteacher.component.css']
})
export class LoginteacherComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitclick(){
    this.router.navigate(['admin']);
  }


}
