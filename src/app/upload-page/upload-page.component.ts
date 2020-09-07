import { Component, ViewChild, OnInit, NgModule } from '@angular/core';
import { NgForm} from '@angular/forms';
import { PostService} from "./posts.service"
import { Post } from './post.model';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
    private errorSub: Subscription;
  
    constructor(private http: HttpClient, private postsService: PostService) {}
  
    ngOnInit() {
      // this.errorSub = this.postsService.error.subscribe(errorMessage => {
      //   this.error = errorMessage;
      // });
  
      // this.isFetching = true;
      // this.postsService.fetchPosts().subscribe(
      //   posts => {
      //     this.isFetching = false;
      //     this.loadedPosts = posts;
      //   },
      //   error => {
      //     this.isFetching = false;
      //     this.error = error.message;
      //   }
      // );
    }
  
    onCreatePost(postData: Post) {
      // Send Http request
      this.postsService.createAndStorePost(postData.title, postData.category, postData.url);
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
  