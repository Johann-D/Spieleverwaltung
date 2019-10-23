import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { AddGameComponent } from './components/add-game/add-game.component';

const routes: Routes = [
  {
    path: 'list',
    component: GameListComponent
  },
  {
    path: 'addGame',
    component: AddGameComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
