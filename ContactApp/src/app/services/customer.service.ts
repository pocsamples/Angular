import { Injectable } from '@angular/core';

@Injectable(
  /*{
    providedIn: 'root' // This will make Service available whenever the 1st component using this service, gets loaded.
    // If not mentioned here and this Service is not mentioned in the provider array of the module or any parent module, of the component using this service, then error will come at the time loading the component who is using this service.
  }*/
)
export class CustomerService {

  constructor() { }
}
