import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HighlightDirective} from './highlight.directive';
import {TitleComponent} from './title.component';
import {UserService} from './user.service';
import {FormsModule} from '@angular/forms';
import {ContactModule} from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ContactModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
