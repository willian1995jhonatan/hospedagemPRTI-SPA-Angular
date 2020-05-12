import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './contato/Feed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PacotesComponent } from './pacotes/pacotes.component';
import { ResortsComponent } from './resorts/resorts.component';
import { CarrosComponent } from './carros/carros.component';
import { CruzeirosComponent } from './cruzeiros/cruzeiros.component';
import { HoteisComponent } from './hoteis/hoteis.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { DicasComponent } from './dicas/dicas.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    NavbarComponent,
    FooterComponent,
    PacotesComponent,
    ResortsComponent,
    CarrosComponent,
    CruzeirosComponent,
    HoteisComponent,
    QuemSomosComponent,
    DicasComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
