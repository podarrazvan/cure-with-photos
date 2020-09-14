import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { PostService } from './upload-page/posts.service';
import { map } from 'rxjs/operators';
import { Post } from './upload-page/post.model';
import { Id } from '../auth/auth.service';


@Injectable()
export class GeneratePageService {
    posts: Post[] = [];
    users: Id[] = [];
  
    constructor(public postsService:PostService) { }
  
    generte(category: string) {
      const usersArray: Id[] = [];
      this.postsService.fetchUsers().pipe(map(responseData =>{
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            usersArray.push({...responseData[key]})
          }
        }
        return usersArray;
      })).subscribe(
        users => { 
          this.users = users;
          for(let user of users) {
            this.getPosts(user.uid, category);
          } 
        }
      );
        return this.posts;
    }
  
    getPosts(uid:string, category: string) {
  
      this.postsService.fetchPosts(uid, category).pipe(map(responseData =>{
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
          this.posts.push(...posts);
        }
        );
        return this.posts
      }
}
