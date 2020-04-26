import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent} from './contato/Feed.component';
  import { from } from 'rxjs';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'contato', component: FeedComponent},
  { path: 'home', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
