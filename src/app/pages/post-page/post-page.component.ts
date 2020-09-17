import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../upload-page/posts.service';
import { Post } from '../upload-page/post.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  isLoading = false;
  urlData: {category: string, uid: string, name: string};
  post;

  constructor(private route: ActivatedRoute,
              private postsService: PostService) { }

  ngOnInit() {
    this.isLoading = true;
    this.urlData= {
      category: this.route.snapshot.params['category'],
      uid: this.route.snapshot.params['uid'],
      name: this.route.snapshot.params['name']
    }
    this.getPost(this.urlData.category, this.urlData.uid, this.urlData.name);
  }
  getPost(category: string, uid:string, name: string) {
  
    this.postsService.fetchSinglePost(category, uid, name).pipe(map(responseData =>{
      console.log(responseData);
      return responseData;
    }))
    .subscribe(
      post => {
        this.post = post;
      }
      );
      this.isLoading = false;
      console.log(this.post);
      return this.post;
    }
}
