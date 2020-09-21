import { User } from './../auth/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StatsService{
    constructor(private http: HttpClient) {
    }

    public getStats(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
         return this.http.get<User>(`${proxy}https://stats.foldingathome.org/api/donor/Tom_the_cat`);
      }
}