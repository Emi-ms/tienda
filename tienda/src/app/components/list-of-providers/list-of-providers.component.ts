import { Component } from '@angular/core';
import { ProviderService } from '../../service/provider.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-of-providers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div id="provider-list-container">  
    <h2>Providers</h2>
    <div *ngFor="let provider of providers|async">
    
      <h3>{{ provider.name }}</h3>
      
      <a [routerLink]="['/providers', provider.name]">Details</a>
    
    </div>
  </div>
  `,
  // templateUrl: './list-of-providers.component.html',
  styleUrl: './list-of-providers.component.css'
})
export class ListOfProvidersComponent {

  constructor(private providerService: ProviderService) {
    console.log("ProviderService:", providerService.getProviders().forEach(x => console.log(x)));
  }

  providers = this.providerService.getProviders();


}
