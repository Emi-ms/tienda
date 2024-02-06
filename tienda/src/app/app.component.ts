import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeProductosComponent } from './lista-de-productos/lista-de-productos.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-alerts/product-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaDeProductosComponent, TopBarComponent, ProductAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda';
}
