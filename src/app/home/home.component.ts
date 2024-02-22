import { Component } from '@angular/core';
import { chefNames } from '../chefNames';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  chefNames = chefNames;
}
