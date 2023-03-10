import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { OrdersService } from '../orders-srv/orders.service';
import { PaymentsService } from '../payment-srv/payments.service';
import { ProfileService } from '../profile-srv/profile.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  customerAndBalance$: Observable<{
    balance: number | null;
    name: string | null;
  }> = combineLatest([
    this.paymentService.paymentBalance$,
    this.profileService.name$,
  ]).pipe(map(([balance, name]) => ({ balance, name })));

  customer$ = this.profileService.name$;
  orders$ = this.orderService.orders$;
  balance$ = this.paymentService.paymentBalance$;

  constructor(
    private profileService: ProfileService,
    private orderService: OrdersService,
    private paymentService: PaymentsService
  ) {}

  addOrder(order: number) {
    this.orderService.addOrder(order);
    this.paymentService.updateBalance(1);
  }
}
