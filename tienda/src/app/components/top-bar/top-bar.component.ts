import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div id="logo-wrapper">
      <a [routerLink]="['/']">
        <h1>My Store</h1>
      </a>

      <img (click)="greet()" alt="photo" src="https://github.com/emi-ms.png" />
  </div>
  <div id='nav-links-wrapper'>
      <a routerLink="/providers" class="nav-button">PROVIDERS</a>
      <a routerLink="" class="nav-button">PRODUCTS</a>
  </div>
      <a routerLink="/cart" class="button fancy-button"><i class="fa-solid fa-cart-shopping"></i>Checkout {{ items.length }}</a>
  
  `,
  // templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})

export class TopBarComponent {

  constructor(private cartService: CartService) { }

  items = this.cartService.getItems();

  greet() {
    alert('Welcome to My Store!');
  }

}
