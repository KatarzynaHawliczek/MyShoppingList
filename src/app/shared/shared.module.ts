import { NgModule } from '@angular/core';
import { CheckedDirective } from './checked.directive';
import { DateDirective } from './date.directive';
import { TransformProductPipe } from './transform-product.pipe';
import { SortNamePipe } from './sort-name.pipe';

@NgModule({
  declarations: [
    CheckedDirective,
    DateDirective,
    TransformProductPipe,
    SortNamePipe
  ],
  imports: [],
  exports: [
    CheckedDirective,
    DateDirective,
    TransformProductPipe,
    SortNamePipe
  ]
})
export class SharedModule {}
