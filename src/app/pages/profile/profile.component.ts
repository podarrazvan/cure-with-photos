import { Component, OnInit } from '@angular/core';
import { AuthService, Id } from 'src/app/auth/auth.service';
import { take } from 'rxjs/internal/operators/take';
import { exhaustMap } from 'rxjs/operators';
import { Post } from '../upload-page/post.model';
import { GeneratePageService } from '../generate-page.service';
import { PostService } from '../upload-page/posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GeneratePageService]
})
export class ProfileComponent implements OnInit {
  
  user;
  isLoading = true;
  posts: Post [] = []
  categories: string [] = ["Cats", "Memes"]
  
  constructor(private authService: AuthService,
              private generatePageService: GeneratePageService,
              private postService: PostService){}

  ngOnInit() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    this.user = userData;
    this.isLoading = true;
    for(let category of this.categories) {
      this.posts = this.generatePageService.getPosts(userData.id,category);
    }
    this.isLoading = false;
  }
  onDelete(post: Post, index: number) {
    this.postService.deletePost(post.category,this.user.id,post.id).subscribe();
    this.posts.splice(index, 1);
  }
}
