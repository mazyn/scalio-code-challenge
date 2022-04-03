import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [FooterComponent, ButtonComponent, LoadingComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [FooterComponent, ButtonComponent, LoadingComponent],
})
export class SharedComponentsModule {}
