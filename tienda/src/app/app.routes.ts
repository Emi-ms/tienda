import { Routes } from '@angular/router';
import { ListaDeProductosComponent } from './components/lista-de-productos/lista-de-productos.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: ListaDeProductosComponent },
    { path: 'products/:productId', component: ProductDetailsComponent}
];
