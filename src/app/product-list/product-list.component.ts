import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import productData from '../../../products-list.json'
import { ProductInterface } from '../interfaces/product-interface';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:ProductInterface[]= productData;
  ngOnInit(): void{
    console.log(this.products)
  }
}
