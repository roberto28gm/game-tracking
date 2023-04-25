import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MostPlayedComponent } from './pages/most-played/most-played.component';
import { PendingComponent } from './pages/pending/pending.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'main', component: MainComponent},
      {path: 'mostplayed', component: MostPlayedComponent},
      {path: 'pending', component: PendingComponent},
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
