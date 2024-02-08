import { Component, OnInit } from '@angular/core';
import { Product, products } from '../../products';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-provider-products',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  template: `

  <div id="provider-list-container">
  <h2>Products of {{providerName}}</h2>
  @if(productsOfProvider.length === 0){
  <p>No products available</p>
  }
  @else{

  @for(product of productsOfProvider; track product.id){
 <div>
  <a 
  [title]="product.name + ' details'" 
  [routerLink]="['/products',product.id]"><h3>{{ product.name }}</h3></a>
  <p>{{ product.description }}</p>
  <p>{{ product.price | currency }}</p>
 
 </div>
}
  
}
</div>
  `,
  styles: `
  h2{
    color: #3f51b5;
  }
  p{
    color: #3f51b5;
  }
  button{
    color: #3f51b5;
}
  
  
  `,
  // templateUrl: './provider-products.component.html',
  styleUrl: './provider-products.component.css'
})
export class ProviderProductsComponent implements OnInit {
  productsOfProvider: Product[] = [];
  providerName: string | undefined;

  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const providerNameFromRoute = routeParams.get('providerName');
    this.productsOfProvider = products.filter(product => product.provider === providerNameFromRoute);
    this.providerName = providerNameFromRoute ?? '';

    console.log(this.productsOfProvider)
  }





}

