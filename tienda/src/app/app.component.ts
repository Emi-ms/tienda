import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeProductosComponent } from './components/lista-de-productos/lista-de-productos.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductAlertComponent } from './components/product-alerts/product-alert.component';

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
