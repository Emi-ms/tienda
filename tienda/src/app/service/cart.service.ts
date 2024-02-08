import { Injectable } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http:HttpClient) { }

  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(product: Product) {
    this.items = this.items.filter(item => item.id !== product.id);
    return this.items;
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number; }[]>('/assets/shipping.json');
  }


}
