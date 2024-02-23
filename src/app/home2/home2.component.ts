import { Component } from '@angular/core';
import { chefNames } from '../chefNames';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
})
export class Home2Component {
  chefNames = chefNames;

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
