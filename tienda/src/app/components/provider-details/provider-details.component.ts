import { Component, OnInit } from '@angular/core';
import { Provider } from '../../provider';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../../service/provider.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import{ RouterModule } from '@angular/router';

@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  <div id="provider-detail-container">
    <h2>Provider Details</h2>

    <div *ngIf="provider | async as providerData; else notFound">
      <h3>{{ providerData.name }}</h3>
      <p>{{ providerData.country }}</p>
      <p>{{ providerData.nif }}</p>
      <a routerLink="/providers/products/{{providerData.name}}">Products</a>
    </div>

    <ng-template #notFound>
      <h3>Provider not found</h3>
    </ng-template>
    </div>
  `,
  styleUrls: ['./provider-details.component.css']
})

export class ProviderDetailsComponent implements OnInit {

  provider: Observable<Provider | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    console.log("route params", routeParams);
    const providerNameFromRoute = routeParams.get('providerName');
    console.log("Nombre del proveedor:", providerNameFromRoute);
    this.provider = this.providerService.getProviderByName(providerNameFromRoute || '');
    console.log("Datos del proveedor:", this.provider);
  }
}