import { Component } from '@angular/core';
import { PortfolioCardsComponent } from '../portfolio-cards/portfolio-cards.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioCardsComponent, FormsModule,CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  cardData : string[]= ["web design","mobile design","logo design", "web application development", "mobile application development", "pwa development"]

}
