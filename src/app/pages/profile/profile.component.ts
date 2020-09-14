import { Component, OnInit } from '@angular/core';
import { AuthService, Id } from 'src/app/auth/auth.service';
import { take } from 'rxjs/internal/operators/take';
import { exhaustMap } from 'rxjs/operators';
import { Post } from '../upload-page/post.model';
import { GeneratePageService } from '../generate-page.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GeneratePageService]
})
export class ProfileComponent implements OnInit {

  id: string;
  isLoading = true;
  posts: Post [] = []
  categories: string [] = ["Cats", "Memes"]
  
  constructor(private authService: AuthService,
              private generatePageService: GeneratePageService){}

  ngOnInit() {
    this.authService.user.pipe(
      take(1)).subscribe(user => {
        this.id = user.id;
      })
    this.isLoading = true;
    for(let category of this.categories) {
      this.posts = this.generatePageService.getPosts(this.id,category);
    }
    this.isLoading = false;
  }
}
