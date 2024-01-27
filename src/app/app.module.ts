import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { BookCoverComponent } from './components/atoms/book-cover/book-cover.component';
import { QuantityComponent } from './components/atoms/quantity/quantity.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/molecules/card/card.component';
import { DetailBookComponent } from './components/molecules/detail-book/detail-book.component';
import { TableComponent } from './components/organism/table/table.component';
import { ShoppingDetailComponent } from './components/templates/shopping-detail/shopping-detail.component';
import { OrderSummaryComponent } from './components/organism/order-summary/order-summary.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { ShoppingCartComponent } from './components/atoms/shopping-cart/shopping-cart.component';
import { ShoppingDetailPageComponent } from './components/pages/shopping-detail-page/shopping-detail-page.component';
import { LayoutComponent } from './components/templates/layout/layout.component';

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
    ShoppingDetailPageComponent,
    LayoutComponent
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
