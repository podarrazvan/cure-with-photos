import { Component, OnInit,DoCheck } from '@angular/core';
import { GeneratePageService } from '../generate-page.service';
import { Post } from '../upload-page/post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cwp-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers:[GeneratePageService]
})
export class PostsComponent implements OnInit, DoCheck {
  urlData: {category: string};
  isLoading = true;
  posts: Post [] = [];
  oldCategory = "";
  adBlock = false;

  constructor(private generatePageService: GeneratePageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkUrl();
  }

  openPost(post: Post) {
    console.log('post', post);
    this.router.navigate(['/post',this.urlData.category, post.uid, post.name])
  }
  ngDoCheck() {
    this.checkUrl();
  }
  checkUrl() {
    this.urlData= {
      category: this.route.snapshot.params['category']
    }
    if(this.urlData.category != this.oldCategory) {
      this.oldCategory = this.urlData.category;
      this.fetchPosts();
    }
  }
  fetchPosts() {
    this.isLoading = true;
    this.posts = [];
    this.posts = this.generatePageService.generte(this.urlData.category);
    this.isLoading = false;
  }
  
  checkAdblock(isDetected: boolean) {
    this.adBlock = isDetected;
  }


}
