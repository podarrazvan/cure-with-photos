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
  hours;
  totalTrees = 0;
  adsLastMonth = 0;
  donationsLastMonth = 0;
  donationsForTreesLastMonth = ((this.adsLastMonth + this.donationsLastMonth)/100) * 10;
  trees = Math.abs(Math.floor(this.donationsForTreesLastMonth/2));
  serverLastMonth = 0;
  unusedMoney = (this.adsLastMonth + this.donationsLastMonth) - this.donationsForTreesLastMonth - this.serverLastMonth;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
    this.getStats();
    const date = new Date()
    const m = date.getMonth() + 1;
    const d = date.getDay() + 20;
    const y = date.getFullYear();
    const h = date.getHours();
    const dt1 = new Date("9 23, 2020 17:00:00");
    const dt2 = new Date(`${m} ${d}, ${y} ${h}:00:00`);
    console.log(dt2);
    this.hours = this.diff_hours(dt1, dt2);
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

  diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }
}
