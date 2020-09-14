import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject} from 'rxjs';

import { Post } from './post.model';
import { Id } from '../../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class PostService implements OnInit {
  
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

  createAndStorePost(title: string, category: string, url: string, localId: string) {
    const postData: Post = { title: title, category: category, url: url};
    this.http
      .post<{ name: string }>(
        `https://cure-with-photos-af2fa.firebaseio.com/posts/${category}/${localId}/.json`,
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

  fetchPosts(users, category) {
    return this.http.get<{[key: string]:Post}>(`https://cure-with-photos-af2fa.firebaseio.com/posts/${category}/${users}/.json`);
  }
  fetchUsers(){
    return this.http.get<{[key: string]:Id}>(`https://cure-with-photos-af2fa.firebaseio.com/users/.json`);
  }
}
