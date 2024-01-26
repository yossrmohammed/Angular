import { Component, Input} from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { DataViewModule ,  DataViewLayoutOptions} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DataViewModule,RatingModule,TagModule,ButtonModule,FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() productData!:ProductInterface
constructor(private router : Router){}
getMoreDetails(id:Number){
  this.router.navigate(['prduct-details', id])
  

}
}
