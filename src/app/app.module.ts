import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SearchPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
