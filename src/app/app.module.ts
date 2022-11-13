import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameboxComponent } from '../app/components/gamebox/gamebox.component';
import { PricetagComponent } from '../app/components/pricetag/pricetag.component';
import { DlcComponent } from './components/dlc/dlc.component';
import { ReservedComponent } from './components/reserved/reserved.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BotonComponent } from './components/boton/boton.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { NavComponent } from './header/nav/nav.component';
import { ListComponent } from './components/list/list.component';
import { LogoComponent } from './components/logo/logo.component';
import { UpcomingComponent } from './header/upcoming/upcoming.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { MidbarComponent } from './components/midbar/midbar.component';
import { MidblockComponent } from './components/midblock/midblock.component';
import { TrustComponent } from './components/trust/trust.component';
import { PlatformComponent } from './components/platform/platform.component';

@NgModule({
  declarations: [
    AppComponent,
    GameboxComponent,
    PricetagComponent,
    DlcComponent,
    ReservedComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BotonComponent,
    TitlebarComponent,
    NavComponent,
    ListComponent,
    LogoComponent,
    UpcomingComponent,
    SearchComponent,
    CartComponent,
    MidbarComponent,
    MidblockComponent,
    TrustComponent,
    PlatformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
