import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-work-plan',
  templateUrl: './work-plan.component.html',
  styleUrls: ['./work-plan.component.scss']
})
export class WorkPlanComponent implements OnInit {
  isOpen = false;
  constructor() { }

  ngOnInit() {
  }
  private wasInside = false;
  
  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }
  
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }
}
