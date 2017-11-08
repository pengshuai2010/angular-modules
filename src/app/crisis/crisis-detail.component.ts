import {Component, Input} from '@angular/core';
import {Crisis} from './crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html'
})
export class CrisisDetailComponent {
  @Input()
  crisis: Crisis;
}
