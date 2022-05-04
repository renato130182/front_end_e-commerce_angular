import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreComponent } from './components/ecommerce/bookstore/bookstore.component';
import { FiltersComponent } from './components/ecommerce/filters/filters.component';
import { BookCardComponent } from './components/ecommerce/book-card/book-card.component';
import { ProductItemComponent } from './components/ecommerce/book-card/product-list/product-item/product-item.component';
import { ProductListComponent } from './components/ecommerce/book-card/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreComponent,
    FiltersComponent,
    BookCardComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
