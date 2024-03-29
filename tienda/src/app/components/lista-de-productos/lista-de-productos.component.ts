import { Component, OnInit } from '@angular/core';
import { products } from '../../products';
import { CommonModule, NgFor } from '@angular/common';
import { ProductAlertComponent } from '../product-alerts/product-alert.component';
import { RouterLink } from '@angular/router';
import { Product } from '../../products';

@Component({
  selector: 'app-lista-de-productos',
  standalone: true,
  imports: [CommonModule, 
    ListaDeProductosComponent, 
    NgFor, 
    ProductAlertComponent, 
    RouterLink,],
  templateUrl: './lista-de-productos.component.html',
  styleUrl: './lista-de-productos.component.css'
})

export class ListaDeProductosComponent implements OnInit{
  products = [...products];
  productBuy:Product[] = [];

  constructor() { }

  ngOnInit(): void {
    const cart = localStorage.getItem('cart');
    this.productBuy = cart ? JSON.parse(cart) : [];
    console.log(this.productBuy);
  }

  greet() {
    alert('Hello');
    console.log('Hello');
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }


}