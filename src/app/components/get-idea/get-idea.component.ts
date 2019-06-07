import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdeeService } from 'src/app/services/IdeeService';
import { Idee } from 'src/app/models/Idee.model';

@Component({
  selector: 'ftc-get-idea',
  templateUrl: './get-idea.component.html',
  styleUrls: ['./get-idea.component.scss']
})
export class GetIdeaComponent implements OnInit {

  constructor( private ideeService: IdeeService,
    private httpClient: HttpClient) { }

  idees  = []; 


  ngOnInit() {
    this.ideeService.get_idees((idees:Idee[])=>{
      this.idees = idees;
    });
  }

}
