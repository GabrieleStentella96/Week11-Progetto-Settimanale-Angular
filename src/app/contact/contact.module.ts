import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ContactModule { }
