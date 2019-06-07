import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ftc-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss']
})
export class SwitchLanguageComponent implements OnInit {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('fr');
      }

  ngOnInit() {
    
  }

  switch() {
      if (this.translate.getDefaultLang() == 'fr') {
          this.translate.setDefaultLang('en');
      } else {
          this.translate.setDefaultLang('fr');
      }
  }

}
