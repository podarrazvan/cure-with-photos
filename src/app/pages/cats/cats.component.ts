import { Component, OnInit } from '@angular/core';
import {GeneratePageService} from '../generate-page.service'
import { Post } from '../upload-page/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
  providers:[GeneratePageService] // !
})
export class CatsComponent implements OnInit {

  isLoading = true;
  posts: Post [] = []
  
  constructor (private generatePageService: GeneratePageService,
              private router: Router){}

  ngOnInit() {
    this.isLoading = true;
    this.posts = this.generatePageService.generte('Cats');
    this.isLoading = false;
  }
  openPost(post: Post) {
    this.router.navigate(['/post','Cats', post.uid, post.name])
  }
}
