/**
 * core module
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/**
 * application components
 */
import { CartComponent } from './components/cart/cart.component';
import { ListComponent } from "./components/list/list.component";

const routes: Routes = [
  { 
    path: '', 
    component: ListComponent
  },
  { 
    path: 'cart', 
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
