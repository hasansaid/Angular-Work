import { BaseService } from './service/base.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
// ****************

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
import { RandomImageProjectComponent } from './component/random-image-project/random-image-project.component';
import { CorrectAnswerProjectComponent } from './component/correct-answer-project/correct-answer-project.component';
import { EqualityComponent } from './component/correct-answer-project/equality/equality.component';
import { BigProjectsComponent } from './component/big-projects/big-projects.component';
import { BlogWebsiteProjectComponent } from './component/big-projects/blog-website-project/blog-website-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './component/big-projects/blog-website-project/dialog/dialog.component';
import { ViewBlogComponent } from './component/big-projects/blog-website-project/view-blog/view-blog.component';
import { UpdateBlogComponent } from './component/big-projects/blog-website-project/update-blog/update-blog.component';
import { StackoverflowProjectComponent } from './component/big-projects/stackoverflow-project/stackoverflow-project.component';
import { SofHeaderComponent } from './component/big-projects/stackoverflow-project/sof-header/sof-header.component';
import { SofLoginComponent } from './component/big-projects/stackoverflow-project/sof-login/sof-login.component';
import { SofAccountComponent } from './component/big-projects/stackoverflow-project/sof-account/sof-account.component';
import { SofHomeComponent } from './component/big-projects/stackoverflow-project/sof-home/sof-home.component';
import { SofSolutionsComponent } from './component/big-projects/stackoverflow-project/sof-solutions/sof-solutions.component';
import { ArticleProjectComponent } from './component/big-projects/article-project/article-project.component';
import { ArtHeaderComponent } from './component/big-projects/article-project/art-header/art-header.component';
import { ArtHomeComponent } from './component/big-projects/article-project/art-home/art-home.component';
import { ArtCreateComponent } from './component/big-projects/article-project/art-create/art-create.component';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { ArtArticleComponent } from './component/big-projects/article-project/art-article/art-article.component';
import { JiraProjectComponent } from './component/big-projects/jira-project/jira-project.component';
import { JiraHeaderComponent } from './component/big-projects/jira-project/jira-header/jira-header.component';
import { JiraBoardsComponent } from './component/big-projects/jira-project/jira-boards/jira-boards.component';
import { JiraBoardsDialogComponent } from './component/big-projects/jira-project/jira-boards-dialog/jira-boards-dialog.component';

// for the translate
import { APP_INITIALIZER } from '@angular/core';
import { TranslateService } from './service/translate.service';
import { TranslatePipe } from './pipes/translate.pipe';

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('tr');
}

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
    RandomImageProjectComponent,
    CorrectAnswerProjectComponent,
    EqualityComponent,
    BigProjectsComponent,
    BlogWebsiteProjectComponent,
    DialogComponent,
    ViewBlogComponent,
    UpdateBlogComponent,
    StackoverflowProjectComponent,
    SofHeaderComponent,
    SofLoginComponent,
    SofAccountComponent,
    SofHomeComponent,
    SofSolutionsComponent,
    ArticleProjectComponent,
    ArtHeaderComponent,
    ArtHomeComponent,
    ArtCreateComponent,
    ArtArticleComponent,
    JiraProjectComponent,
    JiraHeaderComponent,
    JiraBoardsComponent,
    JiraBoardsDialogComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [
    BaseService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
