import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterModule,ReactiveFormsModule,AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {

  items = this.cartService.getItems();



  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });

  constructor(
    private cartService: CartService,
    private formBuilder:FormBuilder,
    ) { }

  
onSubmit(){
  this.cartService.clearCart();
  console.warn("Your order has been submitted", this.checkoutForm.value);
  this.checkoutForm.reset();
}

}
