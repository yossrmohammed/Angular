import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import userData from '../../../users.json'
interface User {
  id: Number;
  age: Number;
  email: String;
  phone: String;
  username: String;
  password :String;
  birthDate:String;
  image: String;
  is_verified: boolean
}
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, MatGridListModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  userData: User[]=userData 
  ngOnInit(): void {
    
   console.log(userData)
  }

}
