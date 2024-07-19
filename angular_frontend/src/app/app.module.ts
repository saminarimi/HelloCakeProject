import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { MenuComponent } from './order/menu/menu.component';
import { CustomiseComponent } from './order/customiseorder/customise/customise.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    CustomiseComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
