import { Component } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { CharactersService } from './_services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'abshrms';

  isLoading: Subject<boolean> = this._loader.isLoading;
  constructor(private _loader: CharactersService) {

  }
}
