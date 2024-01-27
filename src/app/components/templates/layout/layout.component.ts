import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { CartStore } from 'src/app/interfaces/cart.interface';
import { NavbarItem } from 'src/app/interfaces/navbar.interfaces';
import { CartService } from 'src/app/services/cart.service';
import { selectCarts } from 'src/app/store/cart.selectors';
import { DEFAULT_ITEMS_NAVBAR } from 'src/app/utils/constants/navbar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  itemsNavbar: NavbarItem[] = DEFAULT_ITEMS_NAVBAR;

  constructor(private router: Router, private cartService: CartService) {}

  get countCart() {
    return this.cartService.carts.length;
  }

  redirectBuysPage() {
    this.router.navigate(['/buys']);
  }
}
