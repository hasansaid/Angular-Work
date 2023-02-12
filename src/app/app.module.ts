import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PasswordProjectComponent } from './component/password-project/password-project.component';
import { ErrorComponent } from './component/error/error.component';
import { CardProjectComponent } from './component/card-project/card-project.component';
import { CardComponent } from './component/card-project/card/card.component';
import { LetterMatchingProjectComponent } from './component/letter-matching-project/letter-matching-project.component';
import { GoalComponent } from './component/goal/goal.component';
import { DirectivesProjectComponent } from './component/directives-project/directives-project.component';
import { MainComponent } from './component/main/main.component';
import { FirstDirective } from './component/directives-project/direvtive-first/first.directive';
import { RstHomeComponent } from './component/routing-state-management/rst-home/rst-home.component';
import { PlaceholdersComponent } from './component/routing-state-management/placeholders/placeholders.component';
import { ListsComponent } from './component/routing-state-management/lists/lists.component';
import { PopupsComponent } from './component/routing-state-management/popups/popups.component';
import { TablesComponent } from './component/routing-state-management/tables/tables.component';
import { RstMainComponent } from './component/routing-state-management/rst-main/rst-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordProjectComponent,
    ErrorComponent,
    CardProjectComponent,
    CardComponent,
    LetterMatchingProjectComponent,
    GoalComponent,
    DirectivesProjectComponent,
    MainComponent,
    FirstDirective,
    RstHomeComponent,
    PlaceholdersComponent,
    ListsComponent,
    PopupsComponent,
    TablesComponent,
    RstMainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
