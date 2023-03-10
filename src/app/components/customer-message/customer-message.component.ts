import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-srv/app-service.service';

@Component({
  selector: 'app-customer-message',
  templateUrl: './customer-message.component.html',
  styleUrls: ['./customer-message.component.css'],
})
export class CustomerMessageComponent implements OnInit {
  customerInfo$ = this.appService.customerAndBalance$;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.customerInfo$.subscribe((r) => console.log(r));
  }
}
