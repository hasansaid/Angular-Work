import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { RstMainComponent } from './component/routing-state-management/rst-main/rst-main.component';
import { RstPlaceholdersComponent } from './component/routing-state-management/rst-placeholders/rst-placeholders.component';
import { RstListsComponent } from './component/routing-state-management/rst-lists/rst-lists.component';
import { RstPopupsComponent } from './component/routing-state-management/rst-popups/rst-popups.component';
import { RstErrorComponent } from './component/routing-state-management/rst-error/rst-error.component';
import { RstDividerComponent } from './component/routing-state-management/rst-shared/rst-divider/rst-divider.component';
import { RstTablesComponent } from './component/routing-state-management/rst-tables/rst-tables.component';
import { RstSurveyComponent } from './component/routing-state-management/rst-tables/rst-survey/rst-survey.component';
import { RstSurveyTwoComponent } from './component/routing-state-management/rst-tables/rst-survey-two/rst-survey-two.component';
import { RstListsItemComponent } from './component/routing-state-management/rst-lists/rst-lists-item/rst-lists-item.component';
import { RstPopupsModalComponent } from './component/routing-state-management/rst-popups/rst-popups-modal/rst-popups-modal.component';
import { ReactiveFormProjectComponent } from './component/reactive-form-project/reactive-form-project.component';
import { RfInputComponent } from './component/reactive-form-project/rf-input/rf-input.component';
import { RxjsProjectComponent } from './component/rxjs-project/rxjs-project.component';

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
    RstMainComponent,
    RstPlaceholdersComponent,
    RstListsComponent,
    RstPopupsComponent,
    RstErrorComponent,
    RstDividerComponent,
    RstTablesComponent,
    RstSurveyComponent,
    RstSurveyTwoComponent,
    RstListsItemComponent,
    RstPopupsModalComponent,
    ReactiveFormProjectComponent,
    RfInputComponent,
    RxjsProjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
