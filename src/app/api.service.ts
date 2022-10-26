import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  addUser(data: any) {
    return this.http.post('http://localhost:8080/adduser', data);
  }
  userLogin(data: any) {
    return this.http.post('http://localhost:8080/login', data);
  }

  addTweet(data: any) {
    return this.http.post('http://localhost:8080/addpost', data);
  }
  viewTweet = () => {
    return this.http.get('http://localhost:8080/viewposts');
  }
  viewMyTweet = (data:any) => {
    return this.http.post('http://localhost:8080/individual',data);
  }

}
