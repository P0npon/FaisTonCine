import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-idee',
  templateUrl: './get-idee.component.html',
  styleUrls: ['./get-idee.component.scss']
})
export class GetIdeeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  idees  = []; 

  get_idees(){
    this.httpClient.get('https://desolate-retreat-45764.herokuapp.com/idees').subscribe((res : any[])=>{
      console.log(res);
      this.idees = res;
      });
  }

  ngOnInit() {
    this.get_idees();
  }

}
