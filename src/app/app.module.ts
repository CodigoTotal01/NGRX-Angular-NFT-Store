import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {itemsReducer} from "./state/reducers/item.reducer";
import {ROOT_REDUCERS} from "./state/state/item.state";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Imaginar como un json
    StoreModule.forRoot(ROOT_REDUCERS),// Lo que se agrego de manra automatica
    StoreDevtoolsModule.instrument({name: 'TEST'})  // Se agrego
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
