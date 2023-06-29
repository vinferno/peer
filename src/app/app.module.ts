import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevListComponent } from './components/dev-list/dev-list.component';
import { DevListItemComponent } from './components/dev-list-item/dev-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DevListComponent,
    DevListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
