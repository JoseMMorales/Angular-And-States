import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private orderSubject = new BehaviorSubject<number[]>([]);
  orders$ = this.orderSubject.asObservable();

  addOrder(orderId: number) {
    const orders = [...this.orderSubject.value, orderId];
    this.orderSubject.next(orders);
  }
}
