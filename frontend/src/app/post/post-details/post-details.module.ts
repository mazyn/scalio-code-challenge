import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { PostDetailsComponent } from './post-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [CommonModule, FlexLayoutModule, PostDetailsRoutingModule, SharedComponentsModule, RouterModule],
})
export class PostDetailsModule {}
