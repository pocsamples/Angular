import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersModule } from './players/players.module';
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
  {
    path: 'players',
    loadChildren: './players/players.module#PlayersModule', // This line does lazy loading PlayersModule. Whenever user click on button "Players", this module gets loaded.
    //loadChildren: () => PlayersModule // This line loads PlayersModule inside main.js in browser Network tab at startup itself. Does not do lazy loading.
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
