import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [],
  templateUrl: './product-alert.component.html',
  styleUrl: './product-alert.component.css'
})
export class ProductAlertComponent {
@Input() product:Product | undefined;
@Output() notify = new EventEmitter();
}
