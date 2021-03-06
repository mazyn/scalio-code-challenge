import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';

import { GetPostComponent } from './get-post.component';
import { PostService } from '../services/post.service';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  declarations: [GetPostComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forChild(),
    SharedComponentsModule,
  ],
  providers: [PostService],
})
export class GetPostModule {}
