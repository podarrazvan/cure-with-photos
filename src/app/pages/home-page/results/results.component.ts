import { StatsService } from './../../../shared/stats.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  isLoading = false;
  stats;
  hours;

  constructor(private http: HttpClient, private statsService: StatsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.statsService.getStats().subscribe(response => {
      this.stats = response;
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    }) ;
    const date = new Date()
    const m = date.getMonth() + 1;
    const d = date.getDay() + 13;
    const y = date.getFullYear();
    const h = date.getHours();
    const dt1 = new Date("9 19, 2020 08:00:00");
    const dt2 = new Date(`${m} ${d}, ${y} ${h}:00:00`);
    this.hours = this.diff_hours(dt1, dt2);
    
  }

 
  diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }
}
