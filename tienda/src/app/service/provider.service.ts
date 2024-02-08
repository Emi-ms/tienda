import { Injectable } from '@angular/core';
import { Provider } from '../provider';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  providers: Provider[] = [];
  provider: Provider | undefined;

  getProviders() {
    return this.http.get<Provider[]>('/assets/providers.json');
  }

  getProviderByName(name:string):Observable<Provider | undefined>{
    return this.http.get<Provider[]>('/assets/providers.json').pipe(map(providers => providers.find(provider => provider.name === name)));
}

  
}
