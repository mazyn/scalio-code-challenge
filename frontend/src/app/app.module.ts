import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomBreakPointsProvider } from '../config/flex-layout/custom-breakpoints';
import { CustomTextClipDirective } from './shared/directives/custom-text-clip-directive';
import { GetPostModule } from './post/get-post/get-post.module';
import { PostDetailsModule } from './post/post-details/post-details.module';
import { LocalStorageService } from './shared/services/local-storage.service';

@NgModule({
  declarations: [AppComponent, CustomTextClipDirective],
  imports: [BrowserModule, AppRoutingModule, CommonModule, GetPostModule, PostDetailsModule, NgxMaskModule.forRoot()],
  providers: [CustomBreakPointsProvider, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
