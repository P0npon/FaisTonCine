import { Genre } from '../models/Genre.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GenreService {

  private genres: Genre[];

  constructor(private http: HttpClient) { }

  genreSubject = new Subject<Genre[]>();

  addGenre(genre: Genre) {
    console.log(genre);
    this.http.post('https://desolate-retreat-45764.herokuapp.com/genres',genre).subscribe(data => {
      console.log(data);
    });
  }
}