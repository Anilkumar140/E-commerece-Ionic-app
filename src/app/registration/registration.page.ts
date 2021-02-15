import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  firstname: any;
  lastname: any;
  email: any;
  password: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit() {
    this.http.post("http://localhost:3000/api/resitration/", {
      "firstname": this.firstname, "lastname": this.lastname, "email": this.email, "password": this.password
    }).subscribe((res) => {
      console.log(res);
    });
  }
  

}
