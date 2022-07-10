import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    NavbarComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class HeaderModule { }
