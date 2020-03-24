/**
 * core module
 */
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

/**
 * third party modules
 */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/**
 * application modules components and constatnts
 */
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { SharedModule } from './shared/shared.module'


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
