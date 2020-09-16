import { Component, OnInit } from '@angular/core';
import { Post } from '../upload-page/post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  ngOnInit(){
//  this.getStats(); NU MERGE!
  }
  getStats(){
   return this.http.get("https://stats.foldingathome.org/api/team/267093/.json").pipe().subscribe(
     data => {
       console.log(data);
     }
   );
  }

}
