import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../character-details';
import { CharactersService } from '../../_services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit{

  characters: Character[];
  selectedBike: Character;
  error: any;
  gridColumns = 4;

  constructor(private _charactersService : CharactersService,
    private _router: Router) {
  }
  ngOnInit() {
    this.getCharacterList();
  }

  getCharacterList() {
    this._charactersService.getCharactersList().subscribe((response: any) => {
      console.log('SUCCESS', response);
      this.characters = response.results;
    },
    (err) => {
      console.log('Http ERROR', err);
      this.error = 'ERROR in component';
    }
    );
  }

  onSelect(character: Character): void {
    this.selectedBike = character;
    this._router.navigate(["character-details", character.id]);
  }
}
