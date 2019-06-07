import { TypeIdee } from '../models/TypeIdee.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TypeIdeeService {

  private typesIdees: TypeIdee[];

  constructor(private http: HttpClient) { }

  typeIdeeSubject = new Subject<TypeIdee[]>();

  addTypeIdee(typeIdee: TypeIdee) {
    console.log(typeIdee);
    this.http.post('https://desolate-retreat-45764.herokuapp.com/typeIdees',typeIdee).subscribe(data => {
      console.log(data);
    });
  }
}