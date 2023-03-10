import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: OrdersComponent,
    path: 'orders',
  },

  {
    component: PaymentsComponent,
    path: 'payments',
  },
  {
    component: ProfileComponent,
    path: 'profile',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
