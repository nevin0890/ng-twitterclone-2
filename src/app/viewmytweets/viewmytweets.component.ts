import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewmytweets',
  templateUrl: './viewmytweets.component.html',
  styleUrls: ['./viewmytweets.component.css']
})
export class ViewmytweetsComponent implements OnInit {

  constructor(private api: ApiService) { 
this.fetchMyTweets()

  }
  
  fetchMyTweets = () => {
    let data = {
      userid:localStorage.getItem('id')
    }
  
    this.api.viewMyTweet(data).subscribe((res: any) => {
      this.myTweets = res
      console.log(res);
    })
  }



    myTweets:any = []

  ngOnInit(): void {
  }

}
