import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisService} from './crisis.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CrisisListComponent, CrisisDetailComponent],
  exports: [CrisisListComponent],
  providers: [CrisisService]
})
export class CrisisModule {
}
