import { Component, Input, OnInit } from '@angular/core';
import { BooksModule } from '../model/books/books.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }
  @Input()
  livro!: BooksModule;
  ngOnInit(): void {
  }

}
