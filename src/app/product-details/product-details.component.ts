import { Component } from '@angular/core';
import productData from '../../../products-list.json'
import { ProductInterface } from '../interfaces/product-interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  products:ProductInterface[]= productData;
  productDetails ?: ProductInterface
  constructor(private activeRoute : ActivatedRoute){}
  ngOnInit(){
    
    
    const id = this.activeRoute.snapshot.params['id'];
    
    this.productDetails = this.products.find((product:ProductInterface)=>product.id==id)
    //console.log('ID from Route:', id);
    //console.log('All Products:', this.products);
    //console.log('Product Details:', this.productDetails);
  }
}
