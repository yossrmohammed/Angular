import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [GalleriaModule, FormsModule,RatingModule,TagModule,ButtonModule,InputNumberModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  quantity: number = 1;
  productDetails ?: any
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];;
  images: any[] | undefined;
  constructor(private activeRoute : ActivatedRoute ,private productServices: ProductsService){}
  ngOnInit(){
    
    
    const id = this.activeRoute.snapshot.params['id'];
    
    //this.productDetails = this.products.find((product:ProductInterface)=>product.id==id)
    //console.log('ID from Route:', id);
    //console.log('All Products:', this.products);
    //console.log('Product Details:', this.productDetails);
    //this.images=this.productDetails?.images
    this.productServices.getproductById(id).subscribe((res:any)=>{ 
      
      this.productDetails=res
      this.images= res.images
    })
  }
  addToCart(id:Number){
    const productToAdd= this.productServices.getproductById(id).subscribe((res:any)=>{
      //console.log(res)
      this.productServices.AddToCart(res)
  
      
    })
  }
  
}
