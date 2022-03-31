import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomBreakPointsProvider } from "../config/flex-layout/custom-breakpoints";
import { CustomTextClipDirective } from "../directives/custom-text-clip-directive";


@NgModule({
  declarations: [
    AppComponent,
    CustomTextClipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
