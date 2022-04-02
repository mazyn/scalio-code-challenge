import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PostDetailsComponent } from './post-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [CommonModule, FlexLayoutModule, PostDetailsRoutingModule],
})
export class PostDetailsModule {}
