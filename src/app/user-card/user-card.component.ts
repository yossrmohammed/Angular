import { Component, Input, NgModule } from '@angular/core';
import userData from '../../../users.json'

import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() cardData:any;


}
