import { Component, ViewChild, OnInit, NgModule } from '@angular/core';
import { NgForm} from '@angular/forms';
import { PostService} from "./posts.service"
import { Post } from './post.model';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';


@Component({
    selector: 'app-upload-page',
    templateUrl: './upload-page.component.html',
    styleUrls: ['./upload-page.component.css']
  })
  
  export class UploadPageComponent implements OnInit {
    @ViewChild('postForm', { static: false }) ngForm: NgForm;
    categories = ['Cats','Memes']
    loadedPosts: Post[] = [];
    isFetching = false;
    error = null;
    private errorSub: Subscription
    uid = 'public';
  
    constructor(private http: HttpClient, private postsService: PostService, private authService: AuthService) {}
  
    ngOnInit() {
      try {this.authService.user.value.id  
        this.uid = this.authService.user.value.id
      }catch {
        console.log('nu ai id bre')
      }
    }
  
    onCreatePost(postData: Post) {
      // Send Http request
      
      this.postsService.createAndStorePost(postData.title, postData.category, postData.url, this.uid);
      this.ngForm.reset();
    }
  
    // onFetchPosts() {
    //   // Send Http request
    //   this.isFetching = true;
    //   this.postsService.fetchPosts().subscribe(
    //     posts => {
    //       this.isFetching = false;
    //       this.loadedPosts = posts;
    //     },
    //     error => {
    //       this.isFetching = false;
    //       this.error = error.message;
    //       console.log(error);
    //     }
    //   );
    // }
  
   
  
    onHandleError() {
      this.error = null;
    }
  
    ngOnDestroy() {
      this.errorSub.unsubscribe();
    }
  }
  