import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TypeIdeeService } from 'src/app/services/TypeIdeeService';
import { TypeIdee } from 'src/app/models/TypeIdee.model';

@Component({
  selector: 'app-send-type-idee',
  templateUrl: './send-type-idee.component.html',
  styleUrls: ['./send-type-idee.component.scss']
})
export class SendTypeIdeeComponent implements OnInit {

  typeIdeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private typeIdeeService: TypeIdeeService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.typeIdeeForm = this.formBuilder.group({
      typeIdee: ''
    });
  }

  onSubmitForm() {
    const formValue = this.typeIdeeForm.value;

    const newTypeIdee = new TypeIdee(
      null,
      formValue['typeIdee']
    );

    console.log(newTypeIdee);
    this.typeIdeeService.addTypeIdee(newTypeIdee);
    window.location.reload();
  }

}
