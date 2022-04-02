import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [FooterComponent, ButtonComponent],
  imports: [FlexLayoutModule],
  exports: [FooterComponent, ButtonComponent],
})
export class SharedComponentsModule {}
