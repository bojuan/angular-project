import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingDetailPageComponent } from './components/pages/shopping-detail-page/shopping-detail-page.component';

const routes: Routes = [
  { path: 'all', component: ShoppingDetailPageComponent },
  { path: 'programming', component: ShoppingDetailPageComponent },
  { path: 'web-development', component: ShoppingDetailPageComponent },
  { path: 'security', component: ShoppingDetailPageComponent },
  { path: 'buys', component: ShoppingDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
