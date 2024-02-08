import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cart.service';
import { CurrencyPipe } from '@angular/common';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, NgFor],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) { }

  shippingCosts!: Observable<{ type: string; price: number; }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
    // console.log(this.shippingCosts)
  }
}
