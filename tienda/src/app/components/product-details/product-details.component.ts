import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../products';
import { CartService } from '../../service/cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }


  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    // console.log("route params");
    // console.log(routeParams);
    const productIdFromRoute = Number(routeParams.get('productId'));
    // console.log('product id from route');
    // console.log(productIdFromRoute);

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }



}
