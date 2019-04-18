import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from 'src/app/box/box.component';
import {Routes,RouterModule} from '@angular/router';

export const router:Routes=[{
  path:'ahthors/:ahthorName',component:BoxComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
