import { Component, OnInit } from '@angular/core';
import { PostService } from '../upload-page/posts.service';
import { map } from 'rxjs/operators';
import { Post } from '../upload-page/post.model';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  posts: Post[] = [];
  constructor(public postsService:PostService) { }

  ngOnInit(): void {
    this.postsService.fetchPosts().pipe(map(responseData =>{
      const postsArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id: key})
        }
      }
      return postsArray;
    }))
    .subscribe(
      posts => { 
        this.posts = posts;
        this.postsService.loadedPosts = posts;
       console.log(posts)
      }
    );
  }

}
