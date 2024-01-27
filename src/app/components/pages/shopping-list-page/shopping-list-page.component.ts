import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_ITEMS_NAVBAR } from 'src/app/utils/constants/navbar';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss'],
})
export class ShoppingListPageComponent {
  constructor(private router: Router) {}

  get getTitlePage() {
    const url = this.router.url.split('/')[1];
    return DEFAULT_ITEMS_NAVBAR.find((item) => item.route === url)?.label ?? "";
  }
}