import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlistComponent } from './plist/plist.component';
import { SearchTextComponent } from './search-text/search-text.component';

@NgModule({
  declarations: [
    AppComponent,
    PlistComponent,
    SearchTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
