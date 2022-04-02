import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomBreakPointsProvider } from '../config/flex-layout/custom-breakpoints';
import { CustomTextClipDirective } from './shared/directives/custom-text-clip-directive';
import { GetPostModule } from './post/get-post/get-post.module';
import { PostDetailsModule } from './post/post-details/post-details.module';
import { LocalStorageService } from './shared/services/local-storage.service';

@NgModule({
  declarations: [AppComponent, CustomTextClipDirective],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      easing: 'ease-in-out',
      progressBar: true,
      maxOpened: 3,
      autoDismiss: true,
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true,
    }),
    GetPostModule,
    PostDetailsModule,
  ],
  providers: [CustomBreakPointsProvider, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
