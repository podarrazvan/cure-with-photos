import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { take } from 'rxjs/internal/operators/take';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
  })

export class NavbarComponent implements OnInit, DoCheck {
    isOpen = false;
    isLogin = false;
    path = "../auth"
    
    constructor(private authService: AuthService) {}

    ngOnInit() {  
    }
     
    ngDoCheck() {
      this.authService.user.pipe(
        take(1)).subscribe(user => {
          try  {
            user.id
            console.log('esti logat!');
            this.isLogin = true;
            this.path = "../profile"
          }
          catch {
            console.log('nu esti logat!')
          }
        })
    }
}