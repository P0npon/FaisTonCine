import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Genre } from 'src/app/models/Genre.model';
import { GenreService } from 'src/app/services/GenreService';

@Component({
  selector: 'app-send-genre',
  templateUrl: './send-genre.component.html',
  styleUrls: ['./send-genre.component.scss']
})
export class SendGenreComponent implements OnInit {

  genreForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private genreService: GenreService,) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.genreForm = this.formBuilder.group({
      libelle: ''
    });
  }

  onSubmitForm() {
    const formValue = this.genreForm.value;

    const newGenre = new Genre(
      null,
      formValue['libelle']
    );

    console.log(newGenre);
    this.genreService.addGenre(newGenre);
    window.location.reload();
  }

}
