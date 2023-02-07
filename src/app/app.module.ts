import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PasswordProjectComponent } from './component/password-project/password-project.component';
import { ErrorComponent } from './component/error/error.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PasswordProjectComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
