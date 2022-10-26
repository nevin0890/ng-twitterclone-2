import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor(private api: ApiService) { 

    this.viewTweet()
  }
  
  message = ''
  name = localStorage.getItem('user');

  addTweet = () => {
    let tweet = {
      userid :localStorage.getItem('id'),
      message: this.message
      
    }
    this.api.addTweet(tweet).subscribe((res: any) => {
      console.log(res);
    })
    this.message = '';
  }

  viewTweet = () => {
    this.api.viewTweet().subscribe((res: any) => {this.viewTweets = res
      console.log(res);
    })
  }

  viewTweets:any = [];


  
  

  ngOnInit(): void {
  }

}
