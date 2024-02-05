import { Component } from '@angular/core';
import { products } from '../products';
import { share } from 'rxjs';

@Component({
  selector: 'app-lista-de-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-de-productos.component.html',
  styleUrl: './lista-de-productos.component.css'
})

export class ListaDeProductosComponent {
  products = [...products];


  share() {
    window.alert('The product has been shared!');
  }
}