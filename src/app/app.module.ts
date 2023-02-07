import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PasswordProjectComponent } from './component/password-project/password-project.component';
import { ErrorComponent } from './component/error/error.component';
import { CardProjectComponent } from './component/card-project/card-project.component';
import { CardComponent } from './component/card-project/card/card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PasswordProjectComponent, ErrorComponent, CardProjectComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
