import { Component } from '@angular/core';
import { chefNames } from '../chefNames';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
})
export class Home2Component {
  chefNames = chefNames;
}
