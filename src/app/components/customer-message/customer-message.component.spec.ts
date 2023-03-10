import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMessageComponent } from './customer-message.component';

describe('CustomerMessageComponent', () => {
  let component: CustomerMessageComponent;
  let fixture: ComponentFixture<CustomerMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
