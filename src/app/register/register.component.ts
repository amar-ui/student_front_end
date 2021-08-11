import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public regform: any;
  public regform2: any;
  public username: any;
  public email: any;
  public password: any;
  public value: any;
  constructor(

    private route: Router,
    private register: RegisterService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    // $('input').blur(function() {
    //   if ($('#pwd1').attr('value') == $('#pwd2').attr('value')) {
    //   alert('Same Value');
    //   return false;
    //   } else { return true; }
    //   });
    this.regform = new FormGroup({
      email: new FormControl('', []),
      username: new FormControl('', []),
      password: new FormControl('', []),
      password_2: new FormControl('', [])
    })

  }
  onclick() {
    this.route.navigateByUrl('/login');

  }
  onSubmit() {
    console.log(this.regform)
    this.username = this.regform.value.username
    this.email = this.regform.value.email
    this.password = this.regform.value.password
    this.regform2 = {
      'username': this.username,
      'email': this.email,
      'password': this.password
    }
    if (this.register.makeRegister(this.regform2)) {
      this.toastr.success('registered successfully', '', {
        timeOut: 1000,
      });
      this.route.navigateByUrl('/login');


    }else{
      this.toastr.error('error', '', {
        timeOut: 1000,
      });
    }




  }
}
