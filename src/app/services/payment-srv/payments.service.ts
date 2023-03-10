import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private paymentSubject$ = new BehaviorSubject<number | null>(null);
  paymentBalance$ = this.paymentSubject$.asObservable();

  updateBalance(balance: number) {
    const currentBalance = this.paymentSubject$.getValue();

    if (currentBalance) {
      const totalBalance = currentBalance - balance;
      this.paymentSubject$.next(totalBalance);
    }
  }

  addBalance(balance: number) {
    this.paymentSubject$.next(balance);
  }
}
