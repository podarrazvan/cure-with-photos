import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import { Subject} from 'rxjs';

import { Post } from './post.model';
import { Id } from '../../auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService implements OnInit {
  
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

  createAndStorePost(title: string, category: string, url: string, localId: string) {
    const postData: Post = { title: title, category: category,uid: localId, url: url};
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
          this.addLink(responseData.body.name,responseData.url, postData, localId);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }
  addLink(name: string,postUrl, post: Post, uid) {
    let newUrl = postUrl.split(""); 
    newUrl.splice(postUrl.length-6,0,"/"+name)
    newUrl = newUrl.join("");
    const newPost: Post = {title: post.title, category: post.category,uid: post.uid,name: name,url: post.url, postUrl: newUrl};
    this.http
    .put(
      `https://cure-with-photos-af2fa.firebaseio.com/posts/${post.category}/${uid}/${name}/.json`,
        newPost,
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

  fetchSinglePost(category, uid, name) {
    return this.http.get<{[key: string]:Post}>(`https://cure-with-photos-af2fa.firebaseio.com/posts/${category}/${uid}/${name}/.json`);
  }

  fetchUsers(){
    return this.http.get<{[key: string]:Id}>(`https://cure-with-photos-af2fa.firebaseio.com/users/.json`);
  }

  deletePost(category: string, user: string, postId: string){
    console.log(category, user, postId)
    return this.http
    .delete(`https://cure-with-photos-af2fa.firebaseio.com/posts/${category}/${user}/${postId}/.json`, {
      observe: 'events',
      responseType: 'text'
    }).pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          // ...
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
