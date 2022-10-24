import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private api: ApiService, private router: Router) { }

  email = ''
  password = ''

  getUserDetails = () => {
    let user = {
      email: this.email,
      password: this.password

    }

    this.api.userLogin(user).subscribe((res: any) => {
      console.log(res);

      if (res.length > 0) {
        alert('Login Successful');
        this.router.navigate(['/tweet']);
      }
      else {
        alert('Login Failed');
      }

    }
    )
  }

  ngOnInit(): void {
  }

}
