import { Post } from './../../../pages/upload-page/post.model';
import { ProfileComponent } from './../../../pages/profile/profile.component';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'cwp-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  providers: [ProfileComponent]
})
export class CardItemComponent implements OnInit {
  @Input() title: string = null;
  @Input() url: string = null;
  @Input() post: Post;
  @Input() index: number= null;
  @Input() editMode: boolean = false;
  @Output() deleteItem: EventEmitter<Post> = new EventEmitter<Post>(null);
  @Output() open: EventEmitter<Post> = new EventEmitter<Post>(null);

  constructor(private profileComponent: ProfileComponent) { }

  ngOnInit(): void {
  }

  onDelete(post: Post) {
    this.deleteItem.emit(post);
  }

  openPost(post: Post) {
    this.open.emit(post);
  }
}
