import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { MessageService } from "primeng/api";
import { PrimeModule } from "./core/_packages/primeng/prime.module";
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    PrimeModule,
    AccountModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
