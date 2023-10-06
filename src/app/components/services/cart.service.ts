import { Injectable } from "@angular/core";
import { Car } from "src/app/models/car";
import { CartItem } from "src/app/models/cartItem";
import { CartItems } from "src/app/models/cartItems";


@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(car: Car) {
    let item = CartItems.find(c=> c.car.id === car.id);
    if (item) {
      item.totalPrice += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.totalPrice = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(car:Car){
    let item = CartItems.find(c=> c.car.id === car.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list(): CartItem[] {
    return CartItems;
  }
}