import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  isLoading = false
  stats;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
    this.getStats();
  }

  getStats(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
     return this.http.get(`${proxy}https://stats.foldingathome.org/api/donor/Tom_the_cat`).pipe().subscribe(
       data => {
         this.stats = data;
         this.isLoading = false;
       }
     );
  }
}
