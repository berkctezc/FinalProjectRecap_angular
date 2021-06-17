import { Injectable } from '@angular/core';
import { CarDetail } from '../models/cardetail';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:CarDetail){    
    let item = CartItems.find(c => c.car.id===car.id);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(car:CarDetail){
    let item:CartItem = CartItems.find(c => c.car.id===car.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}