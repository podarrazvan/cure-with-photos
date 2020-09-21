import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cwp-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() title: string = null;
  @Input() subtitle: string = null;
  @Input() currentDate: Date = null;
  @Input() user: string = null;
  @Input() editMode: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
