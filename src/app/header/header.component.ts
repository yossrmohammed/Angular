import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
  ButtonModule, TagModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router, private productService : ProductsService){}
  goToLogIn(){
    this.router.navigate(['/login'])

  }
  goToRegister(){
    this.router.navigate(['/register'])

  }
  goToCart(){
    this.router.navigate(['/cart'])

  }
  get itemsInCart():number{
    return this.productService.getItemsCount()
  }

}
