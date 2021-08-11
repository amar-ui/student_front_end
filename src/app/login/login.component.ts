import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  public loginForm2: any;
  public id: any;
  constructor(
    public route: Router,
    public router: ActivatedRoute,
    private login: RegisterService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', [])
    })
    
  }
  onSubmit() {
  
    this.loginForm2 = {
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password
    }

    
    if (this.login.makelogin(this.loginForm2)) {
      this.toastr.success('loggedin successfully', '', {
        timeOut: 1000,
      });
      this.route.navigateByUrl('/dashboard');


    }else{
      this.toastr.error('error', '', {
        timeOut: 1000,
      });
    }
    
  }
  onclick() {
    this.route.navigateByUrl('/register');
  }
}

