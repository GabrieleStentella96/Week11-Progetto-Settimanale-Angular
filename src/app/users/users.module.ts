import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPage } from './users/users.page';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table'

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  }
];
@NgModule({
  declarations: [
    UsersPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatTableModule,
  ]
})
export class UsersModule { }
