import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingDetailPageComponent } from './components/pages/shopping-detail-page/shopping-detail-page.component';
import { ShoppingListPageComponent } from './components/pages/shopping-list-page/shopping-list-page.component';

const routes: Routes = [
  { path: 'all', component: ShoppingListPageComponent },
  { path: 'programming', component: ShoppingListPageComponent },
  { path: 'web-development', component: ShoppingListPageComponent },
  { path: 'security', component: ShoppingListPageComponent },
  { path: 'buys', component: ShoppingDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
