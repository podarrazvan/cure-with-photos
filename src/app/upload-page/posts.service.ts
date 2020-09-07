import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject} from 'rxjs';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  loadedPosts: Post [] = [];
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, category: string, url: string) {
    const postData: Post = { title: title, category: category, url: url };
    this.http
      .post<{ name: string }>(
        'https://cure-with-photos-af2fa.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http.get<{[key: string]:Post}>('https://cure-with-photos-af2fa.firebaseio.com/posts.json');
 
  }
}
