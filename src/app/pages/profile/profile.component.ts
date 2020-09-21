import { Component, OnInit } from '@angular/core';
import { AuthService, Id } from 'src/app/auth/auth.service';
import { take } from 'rxjs/internal/operators/take';
import { exhaustMap } from 'rxjs/operators';
import { Post } from '../upload-page/post.model';
import { GeneratePageService } from '../generate-page.service';
import { PostService } from '../upload-page/posts.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


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
  
  constructor(private generatePageService: GeneratePageService,
              private postService: PostService){}

 async  ngOnInit() {
    this.user = this.getUser()
    this.isLoading = true;
    for(let category of this.categories) {
      this.posts = await this.generatePageService.getPosts(this.user.id,category);

    }
    this.isLoading = false;

  }
 

  onDeleteItemClicked(post: Post)  {
    this.user = this.getUser();
    this.postService.deletePost(post.category,this.user.id,this.user._token,post.id).subscribe((data) => 
    {
        this.posts = this.posts.filter( p => p.id !== post.id );
        // this.posts = this.posts.splice(index, 1); 
        console.log("ProfileComponent -> onDelete -> this.posts ", this.posts )
    }, err => {
      console.log(err)
    });
    // filter , some , find 
  }

  getUser() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    return userData;
  }
}
