import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PendingComponent } from './pages/pending/pending.component';
import { MostPlayedComponent } from './pages/most-played/most-played.component';
import { GameTrackingRoutingModule } from './game-tracking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    MainComponent,
    PendingComponent,
    MostPlayedComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    GameTrackingRoutingModule,
    SharedModule
  ]
})
export class GameTrackingModule { }
