import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { ToDoWrapperComponent } from './to-do-wrapper/to-do-wrapper.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent, ToDoWrapperComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
}
