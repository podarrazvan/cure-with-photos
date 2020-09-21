import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
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
  text: string;
    
    constructor(private authService: AuthService) {}

    ngOnInit() {  
    }
     
    ngDoCheck() {
      this.authService.user.pipe(
        take(1)).subscribe(user => {
          try  {
            user.id
            this.isLogin = true;
            this.path = "../profile"
          }
          catch {
            ///
          }
        })
    }
    private wasInside = false;
  
    @HostListener('click')
    clickInside() {
      this.text = "clicked inside";
      this.wasInside = true;
    }
    
    @HostListener('document:click')
    clickout() {
      if (!this.wasInside) {
        this.isOpen = false;
      }
      this.wasInside = false;
    }
}