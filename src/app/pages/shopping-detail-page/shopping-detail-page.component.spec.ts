import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDetailPageComponent } from './shopping-detail-page.component';

describe('ShoppingDetailPageComponent', () => {
  let component: ShoppingDetailPageComponent;
  let fixture: ComponentFixture<ShoppingDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
