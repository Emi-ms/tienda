import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeProductosComponent } from './lista-de-productos/lista-de-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaDeProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda';
}
