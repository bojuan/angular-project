import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { BookCoverComponent } from './atoms/book-cover/book-cover.component';
import { QuantityComponent } from './atoms/quantity/quantity.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './molecules/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BookCoverComponent,
    QuantityComponent,
    CardComponent
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
