import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public result: any;

  constructor(
    private http: HttpClient,
    ) { }

  makeRegister(data: any) {

    this.result = false
    let baseUrl = 'http://localhost:3000/register';         //register
    return this.http.post(baseUrl, data).subscribe(
      res =>
        //console.log(JSON.stringify(res))
        this.result = true
    );
    return this.result
  }

  makelogin(data: any) {
   // alert(JSON.stringify(data))
    let baseUrl = 'http://localhost:3000/login';              //login checks
    return this.http.post(baseUrl, data).subscribe(
      res =>
        console.log(res)
    );
  }
}