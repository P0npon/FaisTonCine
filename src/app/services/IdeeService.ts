import { Idee } from '../models/Idee.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable()
export class IdeeService {

  private idees: Idee[];

  constructor(private http: HttpClient) { }

  ideeSubject = new Subject<Idee[]>();
  get_idees(httpComplete:(idees:Idee[])=>void){
    this.http.get('https://desolate-retreat-45764.herokuapp.com/idees').subscribe((res : any[])=>{
      console.log(res);
      this.idees = res;
      httpComplete(this.idees)
      });
  }

  addIdee(idee: Idee) {
    console.log(idee);
    this.http.post('https://desolate-retreat-45764.herokuapp.com/idees',idee).subscribe(data => {
      console.log(data);
      window.location.reload();
    });
  }
}