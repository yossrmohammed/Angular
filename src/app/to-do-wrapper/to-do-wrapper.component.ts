import { Component } from '@angular/core';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
@Component({
  selector: 'app-to-do-wrapper',
  standalone: true,
  imports: [ToDoFormComponent,ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})
export class ToDoWrapperComponent {
  tasks: { id: number, task: string }[] = [];
  lastId: number = 0;
  receiveTask(task:any){
    console.log("from to do form to wrapper "+task)
    const newTask = { id: this.lastId++, task: task };
    
    this.tasks.push(newTask);
    console.log(this.tasks)
  }
  deleteTask(taskId:Number){
    console.log("from to do list to wrapper "+taskId)
   this.tasks= this.tasks.filter(item=> item.id!= taskId )

  }

}
