import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  providers: [
    OrderService
  ]
})
export class OrderListComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

}
