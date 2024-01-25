import { Component, EventEmitter, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule ,MatButtonModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  @Output() sendToParent =new EventEmitter()
  addTask(task:any , event:Event):void{
    event.preventDefault()
    console.log(task)
    this.sendToParent.emit(task)

  }
}
