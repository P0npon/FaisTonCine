import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdeeService } from 'src/app/services/IdeeService';
import { Idee } from 'src/app/models/Idee.model';

@Component({
  selector: 'app-get-idee',
  templateUrl: './get-idee.component.html',
  styleUrls: ['./get-idee.component.scss']
})
export class GetIdeeComponent implements OnInit {

  constructor( private ideeService: IdeeService,
    private httpClient: HttpClient) { }

  idees  = []; 


  ngOnInit() {
    this.ideeService.get_idees((idees:Idee[])=>{
      this.idees = idees;
    });
  }

}
