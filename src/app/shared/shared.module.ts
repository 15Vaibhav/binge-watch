/**
 * core modules
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/**
 * application modules components and constatnts
 */
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent,MaterialModule]
})
export class SharedModule { }
