import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
/**delete at end of video 7 lesson 1
     FormsModule**/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
