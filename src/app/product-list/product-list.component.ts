import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import productData from '../../../products-list.json'
import { ProductInterface } from '../interfaces/product-interface';
import { DataViewModule ,  DataViewLayoutOptions} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent,DataViewModule,RatingModule,TagModule,ButtonModule,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:ProductInterface[]= productData;
  ngOnInit(): void{
    console.log(this.products)
  }
}
