import { Routes, RouterModule } from '@angular/router';
import { ListaDeProductosComponent } from './components/lista-de-productos/lista-de-productos.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { ListOfProvidersComponent } from './components/list-of-providers/list-of-providers.component';
import { ProviderProductsComponent } from './components/provider-products/provider-products.component';

export const routes: Routes = [
    { path: '', component: ListaDeProductosComponent },
    { path: 'products/:productId', component: ProductDetailsComponent},
    { path: 'cart', component: CartComponent },
    { path: 'shipping', component: ShippingComponent},
    { path: 'providers/:providerName', component: ProviderDetailsComponent},
    { path: 'providers', component: ListOfProvidersComponent},
    {path: 'providers/products/:providerName', component: ProviderProductsComponent}
];
