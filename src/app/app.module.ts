import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { headerComponent } from './Header/header.component';
import {navbarComponent } from "./NavBar/navbar.component";
import {footerComponent} from "./Footer/footer.component";
import { bannerComponent } from './Banner/banner.component';
import {tarjetaComponent} from "./Tarjetas/tarjetas.component";
import {tarjetarosaComponent} from "./TarjetaRosa/tarjetarosa.component"
import { tarjetagrisComponent } from './TarjetaGris/tarjetagris.component';
import { tarjetablancaComponent } from './TarjetaBlanca/tarjetablanca.component';
import { tarjetaverdeComponent } from './TarjetaVerde/tarjetaverde.component';
@NgModule({
  declarations: [AppComponent,headerComponent,navbarComponent,footerComponent,bannerComponent,
    tarjetaComponent,tarjetarosaComponent,tarjetagrisComponent,tarjetablancaComponent,tarjetaverdeComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
