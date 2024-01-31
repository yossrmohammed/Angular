import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { DataViewModule ,  DataViewLayoutOptions} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProductInterface } from '../interfaces/product-interface';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DataViewModule,RatingModule,TagModule,FormsModule, InputNumberModule, ButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor( private productService :ProductsService){}
  products:any=[]
  ngOnInit(){
    this.productService.cartItem.subscribe((item:any)=>{
      this.products=item
    })
  }
  updateQuantity(item: ProductInterface) {
    
    this.productService.updateTotalPrice(item);
  }
  removeItemFromCart(itemId: number) {
    this.productService.removeItemFromCart(itemId);
  }
  
}
