import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-srv/app-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  balance$ = this.appService.balance$;

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  addOrder(order: HTMLInputElement) {
    if (order.value) {
      this.appService.addOrder(order.valueAsNumber);
      order.value = '';
    }
  }
}
