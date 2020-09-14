import { Component, OnInit } from '@angular/core';
import { GeneratePageService } from '../generate-page.service';
import { Post } from '../upload-page/post.model';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css'],
  providers:[GeneratePageService]
})
export class MemesComponent implements OnInit {

  posts: Post [] = []
  
  constructor (private generatePageService: GeneratePageService){}

  ngOnInit(): void {
    this.posts = this.generatePageService.generte('Memes');
  }

}
