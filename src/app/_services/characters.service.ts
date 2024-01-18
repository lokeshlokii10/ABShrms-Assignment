import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  isLoading = new Subject<boolean>();
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }

  constructor(private http: HttpClient) {}

  // Api to fetches list of the characters
  getCharactersList() {
    return this.http.get(`https://rickandmortyapi.com/api/character`).pipe(
      map((val) => {
        return val;
      })
    );
  }

  // Api to fetches details of the character
  getCharactersInfo(id: number) {
    return this.http
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .pipe(
        map((val) => {
          return val;
        })
      );
  }
}
