import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { BookCoverComponent } from './components/atoms/book-cover/book-cover.component';
import { QuantityComponent } from './components/atoms/quantity/quantity.component';
import { CardComponent } from './components/molecules/card/card.component';
import { DetailBookComponent } from './components/molecules/detail-book/detail-book.component';
import { TableComponent } from './components/organism/table/table.component';
import { ShoppingDetailComponent } from './components/templates/shopping-detail/shopping-detail.component';
import { OrderSummaryComponent } from './components/organism/order-summary/order-summary.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { ShoppingCartComponent } from './components/atoms/shopping-cart/shopping-cart.component';
import { ShoppingDetailPageComponent } from './components/pages/shopping-detail-page/shopping-detail-page.component';
import { LayoutComponent } from './components/templates/layout/layout.component';
import { ShoppingListPageComponent } from './components/pages/shopping-list-page/shopping-list-page.component';
import { ShoppingListComponent } from './components/templates/shopping-list/shopping-list.component';
import { cartReducer } from './store/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './store/cart.effects';

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
    LayoutComponent,
    ShoppingListPageComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      cart: cartReducer,
    }),
    EffectsModule.forRoot([CartEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
