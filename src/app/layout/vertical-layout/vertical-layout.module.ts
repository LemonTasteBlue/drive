import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerticalLayoutComponent} from './vertical-layout/vertical-layout.component';


@NgModule({
  declarations: [
    VerticalLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VerticalLayoutComponent
  ]
})
export class VerticalLayoutModule {
}
