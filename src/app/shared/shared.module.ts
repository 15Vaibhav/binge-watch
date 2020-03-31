/**
 * core modules
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/**
 * application modules components and constatnts
 */
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent, AddToCartComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent,MaterialModule],
  entryComponents: [AddToCartComponent],
})
export class SharedModule { }
