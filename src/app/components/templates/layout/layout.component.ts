import { Component } from '@angular/core';
import { NavbarItem } from 'src/app/interfaces/navbar.interfaces';
import { DEFAULT_ITEMS_NAVBAR } from 'src/app/utils/constants/navbar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  itemsNavbar: NavbarItem[] = DEFAULT_ITEMS_NAVBAR;
}
