import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BayComponent } from './bay/bay.component';
import { HelloComponent } from './hello/hello.component';
import { EvenColorDirective } from './hello/directives/even-color.directive';
import { ListColorsComponent } from './list-colors/list-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    BayComponent,
    HelloComponent,
    EvenColorDirective,
    ListColorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
