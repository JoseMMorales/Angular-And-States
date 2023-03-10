import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-srv/app-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css'],
})
export class OrderListComponent implements OnInit {
  orders$ = this.appService.orders$;

  constructor(private appService: AppService) {}

  ngOnInit(): void {}
}
