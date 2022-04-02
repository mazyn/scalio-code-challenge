import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [FooterComponent, InputComponent, TextareaComponent, ButtonComponent, LinkComponent],
  imports: [FlexLayoutModule],
  exports: [FooterComponent, InputComponent, TextareaComponent, ButtonComponent, LinkComponent],
})
export class SharedComponentsModule {}
