import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './_components/character-details/character-details.component';
import { CharacterListComponent } from './_components/character-list/character-list.component';

const routes: Routes = [
  {
    component: CharacterListComponent,
    path: 'home'
  },
  {
    component: CharacterDetailsComponent,
    path: 'character-details/:id'
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
