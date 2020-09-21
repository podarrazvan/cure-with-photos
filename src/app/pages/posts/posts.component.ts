import { Component, OnInit } from '@angular/core';
import { GeneratePageService } from '../generate-page.service';
import { Post } from '../upload-page/post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cwp-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers:[GeneratePageService]
})
export class PostsComponent implements OnInit {
  
  urlData: {category: string};
  isLoading = true;
  posts: Post [] = [];

  constructor(private generatePageService: GeneratePageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.urlData= {
      category: this.route.snapshot.params['category']
    }
    this.isLoading = true;
    this.posts = this.generatePageService.generte(this.urlData.category);
    this.isLoading = false;
  }

  openPost(post: Post) {
    this.router.navigate(['/post','Cats', post.uid, post.name])
  }

}
