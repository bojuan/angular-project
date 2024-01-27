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
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { ShoppingCartComponent } from './atoms/shopping-cart/shopping-cart.component';
import { ShoppingDetailPageComponent } from './pages/shopping-detail-page/shopping-detail-page.component';

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
    OrderSummaryComponent,
    NavbarComponent,
    ShoppingCartComponent,
    ShoppingDetailPageComponent
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
