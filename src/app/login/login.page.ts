import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  newPost: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  login() {
    // this.http.post("http://localhost:3000/login", ["email": this.email, "password": this.password ]).subscribe(credential => {
    //   console.log("credential data" + credential);
    // this.http.get("http://localhost:3000/api/resitration/", { params: this.password }).subscribe(response => {
    //   console.log(response);
    //   this.newPost = response
      window.location.href = "/tabs";
    // });

  }

}
