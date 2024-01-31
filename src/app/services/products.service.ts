import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http :HttpClient) { }
  getAllproducts(){
    return this.http.get('https://dummyjson.com/products')
  }
  getproductById(id:Number){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
  private cartItemSubject= new BehaviorSubject<ProductInterface[]>([])
  cartItem=this.cartItemSubject.asObservable();
  AddToCart(product:ProductInterface){
    const currentCartItem = this.cartItemSubject.value;
    const existingCartItemIndex = currentCartItem.findIndex(item => item.id === product.id);

    if (existingCartItemIndex !== -1) {
      currentCartItem[existingCartItemIndex].quantity += 1;

    } else {
      this.cartItemSubject.next([...currentCartItem, { ...product, quantity: 1 }]);
    }
    console.log(product)
    console.log(currentCartItem)
    

   
    
  
  }
  getItemsCount():number{
    return this.cartItemSubject.value.reduce((acc, item) => acc + item.quantity, 0);
  }
  getTotalPrice ():number{
    return this.cartItemSubject.value.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  }
  updateTotalPrice(item: ProductInterface){
    const currentCartItem = this.cartItemSubject.value;
    const existingCartItemIndex = currentCartItem.findIndex(item => item.id === item.id);

    if (existingCartItemIndex !== -1) {
      currentCartItem[existingCartItemIndex].quantity = item.quantity;
      this.cartItemSubject.next([...currentCartItem]);
    }
  }
  removeItemFromCart(itemId: number) {
    const currentCartItem = this.cartItemSubject.value;
    const updatedCart = currentCartItem.filter(item => item.id !== itemId);
    this.cartItemSubject.next(updatedCart);
  }
}
