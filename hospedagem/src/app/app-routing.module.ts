import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent} from './contato/Feed.component';
import { PacotesComponent} from './pacotes/pacotes.component';
import { CarrosComponent} from './carros/carros.component';
import { CruzeirosComponent} from './cruzeiros/cruzeiros.component';
import { DicasComponent} from './dicas/dicas.component';
import { HoteisComponent} from './hoteis/hoteis.component';
import { ResortsComponent} from './resorts/resorts.component';
import { QuemSomosComponent} from './quem-somos/quem-somos.component';

  import { from } from 'rxjs';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'cadastro', component: CadastroComponent},
  { path: 'contato', component: FeedComponent},
  { path: 'home', component: HomeComponent},
  { path: 'pacotes', component: PacotesComponent},
  { path: 'carros', component: CarrosComponent},
  { path: 'cruzeiros', component: CruzeirosComponent},
  { path: 'dicas', component: DicasComponent},
  { path: 'hoteis', component: HoteisComponent},
  { path: 'resorts', component: ResortsComponent},
  { path: 'quem-somos', component: QuemSomosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
