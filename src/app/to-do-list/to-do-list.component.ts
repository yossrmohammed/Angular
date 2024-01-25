import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [MatListModule, MatButtonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
@Input() taskItem:{ id: number, task: string }={
  id: 0,
  task: ''
}

@Output() sendToParent=new EventEmitter()
deleteTask(taskId:Number, event:any){
  event.preventDefault()
  //console.log(task)
  this.sendToParent.emit(taskId)
  
}
}
