import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BooksModule { 
  id!: string;
  name!: string;
  price!: number;
  quantity!: number;
  category!: string;
  img!: string;
}
