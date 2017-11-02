import {Component, Input} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent {
  @Input()
  title = 'my title';
  @Input()
  subtitle: string;
  constructor(private userService: UserService) {}// the private/public indicates the input argument is also a property to be injected
  get username(): string {
    return this.userService.username;
  }
}
