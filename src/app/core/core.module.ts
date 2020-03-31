/**
 * core module
 */
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

/**
 * application components
 */
import { CoreRoutingModule } from './core-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ListComponent, CartComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
