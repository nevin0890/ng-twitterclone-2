import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }

  name = '';
  dob = '';
  place = '';
  mobile = '';
  email = '';
  password = '';


  addUsers = () => {
    let user = {
      name: this.name,
      dob: this.dob,
      place: this.place,
      mobile: this.mobile,
      email: this.email,
      password: this.password
    }
    this.api.addUser(user).subscribe((res: any) => {
      console.log(res);

    })
    alert('User added successfully');
    this.name = '';
    this.dob = '';
    this.place = '';
    this.mobile = '';
    this.email = '';
    this.password = '';
    this.router.navigate(['/login']);

  }

  ngOnInit(): void {
  }

}
