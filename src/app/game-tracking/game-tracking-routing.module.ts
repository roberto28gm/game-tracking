import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MostPlayedComponent } from './pages/most-played/most-played.component';
import { PendingComponent } from './pages/pending/pending.component';
import { NewGameComponent } from './pages/new-game/new-game.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'main', component: MainComponent},
      {path: 'mostplayed', component: MostPlayedComponent},
      {path: 'pending', component: PendingComponent},
      {path: 'new', component: NewGameComponent},
      {path: '**', redirectTo: 'main'}
    ]
  } 
];


@NgModule({
  declarations: [],
  imports: [
   [RouterModule.forChild(routes)] 
  ],
  exports: [
    [RouterModule]
  ]
})
export class GameTrackingRoutingModule { }
