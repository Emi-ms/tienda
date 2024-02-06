import { Component } from '@angular/core';
import { products } from '../products';
import { CommonModule, NgFor } from '@angular/common';
import { ProductAlertComponent } from '../product-alerts/product-alert.component';

@Component({
  selector: 'app-lista-de-productos',
  standalone: true,
  imports: [CommonModule ,ListaDeProductosComponent, NgFor, ProductAlertComponent],
  templateUrl: './lista-de-productos.component.html',
  styleUrl: './lista-de-productos.component.css'
})

export class ListaDeProductosComponent {
  products = [...products];

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