import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [AppComponent, TagsComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
})
export class AppModule {}
