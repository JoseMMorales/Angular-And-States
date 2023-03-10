import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payment-srv/payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  balance$ = this.paymentService.paymentBalance$;

  constructor(private paymentService: PaymentsService) {}

  ngOnInit(): void {}

  updateBalance(balance: HTMLInputElement) {
    this.paymentService.addBalance(balance.valueAsNumber);
  }
}
