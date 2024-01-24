import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
   skills: string[] = ["HTML", "CSS", "JavaScript", "React", "Photoshop", "Adobe XD" , "Nodejs", "WordPress"];
  widths : string[] = ["90", "90","80","80","90","80","70","60"]
  
}
