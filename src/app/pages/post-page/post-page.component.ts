import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta, makeStateKey } from '@angular/platform-browser';
import { PostService } from '../upload-page/posts.service';
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
  adBlock:boolean;

  constructor(private route: ActivatedRoute,
              private postsService: PostService,
              private title: Title, 
              private meta: Meta) { }

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
      return responseData;
    }))
    .subscribe(
      postData => {
        this.post = postData;
        this.isLoading = false;
        this.addMetaTags(this.post);
      }
      );
    }
  addMetaTags(postTags) {
    this.title.setTitle(postTags.title);
    this.meta.addTags([
      //Twitter
      {property:"twitter:url", content:`https://cure-with-photos-af2fa.web.app/post/${postTags.category}/${postTags.uid}/${postTags.name}`},
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: postTags.title },
      { name: 'twitter:description', content: "" },
      { name: 'twitter:image', content: postTags.url},
      // Facebook
      {property:'og:url', content:`https://cure-with-photos-af2fa.web.app/post/${postTags.category}/${postTags.uid}/${postTags.name}`},
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: postTags.title },
      { name: 'og:description', content: "" },
      { name: 'og:image', content: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2Yh9WrvTul7uZ_GqPjcXwn8s0tKumdritkg&usqp=CAU"},
    ]);

  }


    checkAdblock(isDetected: boolean) {
      this.adBlock = isDetected;
    }
}
