import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PendingComponent } from './pages/pending/pending.component';
import { MostPlayedComponent } from './pages/most-played/most-played.component';
import { GameTrackingRoutingModule } from './game-tracking-routing.module';


@NgModule({
  declarations: [
    MainComponent,
    PendingComponent,
    MostPlayedComponent
  ],
  imports: [
    CommonModule,
    GameTrackingRoutingModule
  ]
})
export class GameTrackingModule { }
