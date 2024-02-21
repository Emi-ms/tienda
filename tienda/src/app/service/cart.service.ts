import { Injectable } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Before } from 'v8';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http:HttpClient) { }

  items: Product[] = [];
  itemSubjects:BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.items);


  addToCart(product: Product) {
    this.items.push(product);
    this.itemSubjects.next(this.items);
  }

  getItems() {
    // return this.items;
    return this.itemSubjects.asObservable();
  }

  getItemsBuy() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemSubjects.next(this.items)
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
