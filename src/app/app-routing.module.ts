import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { link } from 'fs';
import { DeviceComponent } from './device/device.component';
import { LinkComponent } from './link/link.component';
import { MerchantComponent } from './merchant/merchant.component';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path:'merchant',component:MerchantComponent
  },
  {
    path:'device',component:DeviceComponent
  },
  {
    path:'link',component:LinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
