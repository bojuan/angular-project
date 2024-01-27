import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarItem } from 'src/app/interfaces/navbar.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() items: NavbarItem[] = [];
  @Input() countCart: number = 0;

  @Output() clickCart = new EventEmitter<number>();

  handleClick() {
    this.clickCart.emit(this.countCart);
  }
}
