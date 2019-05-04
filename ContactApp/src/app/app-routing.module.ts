import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule', // This line does lazy loading CustomersModule. Whenever user click on button "Customers", this module gets loaded.
    //loadChildren: () => CustomersModule // This line loads CustomersModule inside main.js in browser Network tab at startup itself. Does not do lazy loading.
    //That will load Services used by components as well.
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
    //loadChildren: () => OrdersModule
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
