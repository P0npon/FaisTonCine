import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IdeeService } from '../../services/IdeeService';
import { Router } from '@angular/router';
import { Idee } from '../../models/Idee.model';
import { Genre } from '../../models/Genre.model';
import { TypeIdee } from '../../models/TypeIdee.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ftc-send-idea',
  templateUrl: './send-idea.component.html',
  styleUrls: ['./send-idea.component.scss']
})
export class SendIdeaComponent implements OnInit {

  ideeForm: FormGroup;
  selectedGenre = 1;
  selectedTypeIdee = 1;

  genres  = []; 
  typeIdees  = []; 

  constructor(private formBuilder: FormBuilder,
              private ideeService: IdeeService,
              private router: Router,
              private httpClient: HttpClient) { }
  ngOnInit() {

    this.initForm();
    this.get_genres();
    this.get_typeIdee();
  }

  get_genres(){
    this.httpClient.get('https://desolate-retreat-45764.herokuapp.com/genres').subscribe((res : any[])=>{
      console.log(res);
      this.genres = res;
    })
  }

  get_typeIdee(){
    this.httpClient.get('https://desolate-retreat-45764.herokuapp.com/typeIdees').subscribe((res : any[])=>{
      console.log(res);
      this.typeIdees = res;
    })
  }

  initForm() {
    this.ideeForm = this.formBuilder.group({
      title: '',
      idee: '',
      genre: '',
      typeIdee: ''
    });
  }

  selectChangeHandlerGenre (event: any) {
    this.selectedGenre = event.target.value;
  }

  selectChangeHandlerTypeIdee (event: any) {
    console.log("TEST" + event.target.value);
    this.selectedTypeIdee = event.target.value;
  }

  onSubmitForm() {

    const formValue = this.ideeForm.value;

    var currentTime = new Date();

    const newGenre = new Genre(
      this.selectedGenre,
      null
    );

    const newTypeIdee = new TypeIdee(
      this.selectedTypeIdee,
      null
    );

    const newIdee = new Idee(
      currentTime,
      formValue['title'],
      formValue['idee'],
      newGenre,
      newTypeIdee,
    );
    console.log(newIdee);
    this.ideeService.addIdee(newIdee);
    window.location.reload();
  }

}