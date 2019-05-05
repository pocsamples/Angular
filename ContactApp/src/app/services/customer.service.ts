import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../model/customer';

@Injectable(
  /*{
    providedIn: 'root' // This will make Service available whenever the 1st component using this service, gets loaded.
    // This way service is Singleton and same service instance is available for all reference. Other way to make service
    // singleton is to put it in provider array of root modue, i.e here AppModule
    // If not mentioned here and this Service is not mentioned in the provider array of the module or any parent module, of the component using this service, then error will come at the time loading the component who is using this service.
  }*/
)
export class CustomerService {
  // to access json resource, add "app/services/data/" from the url in angular.json at "assets" section
  private url: string = 'app/services/data/customers.json';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.url);
  }
}
