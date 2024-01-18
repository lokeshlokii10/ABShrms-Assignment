import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharactersService } from '../../_services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
})
export class CharacterDetailsComponent implements OnInit{
  character : any;
  error: string;

  constructor(
    private _charactersService: CharactersService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCharacterInfo()
  }

// Fetch the details of selected Character
  getCharacterInfo() {
    this._route.params
      .pipe(
        switchMap((params: Params) =>
          this._charactersService.getCharactersInfo(+params['id'])
        )
      )
      .subscribe((char: any) =>{
        (this.character = char)
      },
      (err) => {
        console.log('Http ERROR', err);
        this.error = 'ERROR in component';
      } );
  }
}
