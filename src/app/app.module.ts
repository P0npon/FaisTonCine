import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpperCaseFirstPipe } from './pipes/ucfirst.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SendIdeaComponent } from './components/send-idea/send-idea.component';
import { IdeeService } from './services/IdeeService';
import { SwitchLanguageComponent } from './components/switch-language/switch-language.component';

import { LoginComponent } from './pages/login/login.component';
import { MyScenarioComponent } from './pages/my-scenario/my-scenario.component';
import { MyIdeasComponent } from './pages/my-ideas/my-ideas.component';
import { RateScenarioComponent } from './pages/rate-sceanrio/rate-sceanrio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { GetIdeaComponent } from './components/get-idea/get-idea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MyIdeasComponent,
    MyScenarioComponent,
    RateScenarioComponent,
    ContactComponent,
    AdminComponent,
    UpperCaseFirstPipe,
    SendIdeaComponent,
    GetIdeaComponent,
    SwitchLanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [IdeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}