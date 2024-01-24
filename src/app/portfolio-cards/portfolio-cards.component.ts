import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio-cards',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './portfolio-cards.component.html',
  styleUrl: './portfolio-cards.component.css'
})
export class PortfolioCardsComponent {
  @Input() cardData: string[] = [];
  
}
