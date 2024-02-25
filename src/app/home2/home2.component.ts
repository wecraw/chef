import { Component, HostListener } from '@angular/core';
import { chefNames } from '../chefNames';
import { ViewportScroller } from '@angular/common';
import { merchLinks } from '../merchLinks';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
})
export class Home2Component {
  chefNames = chefNames;
  merchLinks = merchLinks;
  scrollZone = 0;

  //carousel
  carouselPosition = 0;
  slideIn = false;
  slideOut = false;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Calculate the scroll position
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Define thresholds for different scroll zones
    const zoneThresholds = [0, 600, 1200, 1800]; // Change these values as per your requirement

    // Find the current scroll zone based on scroll position
    for (let i = 0; i < zoneThresholds.length; i++) {
      if (scrollPosition < zoneThresholds[i]) {
        console.log('Scroll Zone:', i);
        this.scrollZone = i - 1;
        break;
      }
    }
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  moveCarousel(direction: number) {
    this.slideOut = true;

    let that = this;
    setTimeout(function () {
      that.slideIn = true;
      that.slideOut = false;
      that.carouselPosition += direction;
      if (that.carouselPosition < 0) {
        that.carouselPosition = that.merchLinks.length - 1;
      }
      if (that.carouselPosition >= that.merchLinks.length) {
        that.carouselPosition = 0;
      }
    }, 500); // 750 milliseconds = 0.75 seconds
  }
}
