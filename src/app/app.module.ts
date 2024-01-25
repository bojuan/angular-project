import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { BookCoverComponent } from './atoms/book-cover/book-cover.component';
import { QuantityComponent } from './atoms/quantity/quantity.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './molecules/card/card.component';
import { DetailBookComponent } from './molecules/detail-book/detail-book.component';
import { TableComponent } from './organism/table/table.component';
import { ShoppingDetailComponent } from './templates/shopping-detail/shopping-detail.component';
import { OrderSummaryComponent } from './organism/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BookCoverComponent,
    QuantityComponent,
    CardComponent,
    DetailBookComponent,
    TableComponent,
    ShoppingDetailComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
