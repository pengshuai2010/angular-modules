import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {ContactHighlightDirective} from './highlight.directive';
import {AwesomePipe} from './awesome.pipe';
import {ContactService} from './contact.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ContactComponent, ContactHighlightDirective, AwesomePipe],
  exports: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule {
}
