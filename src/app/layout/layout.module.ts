import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlankLayoutModule} from './blank-layout/blank-layout.module';
import {VerticalLayoutModule} from './vertical-layout/vertical-layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlankLayoutModule,
    VerticalLayoutModule
  ],
  exports: [
    BlankLayoutModule,
    VerticalLayoutModule
  ]
})
export class LayoutModule {
}
