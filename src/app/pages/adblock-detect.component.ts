import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'cwp-adblock-detect',
  template: ' <ng-adblock-detect (adblockDetected)="detected($event)"></ng-adblock-detect>'
})
export class AdblockDetectComponent {

  @Output() adDetected: EventEmitter<boolean> = new EventEmitter<boolean>(null);

  constructor() { }

  detected(isDetected: boolean) {
   this.adDetected.emit(isDetected);
  }

}
