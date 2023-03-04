import { SofHomeComponent } from './component/big-projects/stackoverflow-project/sof-home/sof-home.component';
import { SofAccountComponent } from './component/big-projects/stackoverflow-project/sof-account/sof-account.component';
import { SofLoginComponent } from './component/big-projects/stackoverflow-project/sof-login/sof-login.component';
import { StackoverflowProjectComponent } from './component/big-projects/stackoverflow-project/stackoverflow-project.component';
import { UpdateBlogComponent } from './component/big-projects/blog-website-project/update-blog/update-blog.component';
import { ViewBlogComponent } from './component/big-projects/blog-website-project/view-blog/view-blog.component';
import { BlogWebsiteProjectComponent } from './component/big-projects/blog-website-project/blog-website-project.component';
import { BigProjectsComponent } from './component/big-projects/big-projects.component';
import { CorrectAnswerProjectComponent } from './component/correct-answer-project/correct-answer-project.component';
import { RandomImageProjectComponent } from './component/random-image-project/random-image-project.component';
import { RxjsProjectComponent } from './component/rxjs-project/rxjs-project.component';
import { ReactiveFormProjectComponent } from './component/reactive-form-project/reactive-form-project.component';
import { RstSurveyTwoComponent } from './component/routing-state-management/rst-tables/rst-survey-two/rst-survey-two.component';
import { RstSurveyComponent } from './component/routing-state-management/rst-tables/rst-survey/rst-survey.component';
import { RstTablesComponent } from './component/routing-state-management/rst-tables/rst-tables.component';
import { RstErrorComponent } from './component/routing-state-management/rst-error/rst-error.component';
import { RstPopupsComponent } from './component/routing-state-management/rst-popups/rst-popups.component';
import { RstListsComponent } from './component/routing-state-management/rst-lists/rst-lists.component';
import { RstPlaceholdersComponent } from './component/routing-state-management/rst-placeholders/rst-placeholders.component';
import { RstMainComponent } from './component/routing-state-management/rst-main/rst-main.component';
import { RstHomeComponent } from './component/routing-state-management/rst-home/rst-home.component';
import { MainComponent } from './component/main/main.component';
import { DirectivesProjectComponent } from './component/directives-project/directives-project.component';
import { LetterMatchingProjectComponent } from './component/letter-matching-project/letter-matching-project.component';
import { CardProjectComponent } from './component/card-project/card-project.component';
import { ErrorComponent } from './component/error/error.component';
import { PasswordProjectComponent } from './component/password-project/password-project.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'big-projects', component: BigProjectsComponent },
  {
    path: 'big-projects/blog-website-project',
    component: BlogWebsiteProjectComponent,
  },
  {
    path: 'big-projects/blog-website-project/view-blog/:blogid',
    component: ViewBlogComponent,
  },
  {
    path: 'big-projects/blog-website-project/update-blog/:blogid',
    component: UpdateBlogComponent,
  },
  {
    path: 'big-projects/stackoverflow-project',
    component: StackoverflowProjectComponent,
    children: [
      { path: '', component: SofLoginComponent },
      { path: 'sof-login', component: SofLoginComponent },
      { path: 'sof-account', component: SofAccountComponent },
      { path: 'sof-home', component: SofHomeComponent },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'home/password-project', component: PasswordProjectComponent },
  { path: 'home/card-pipes-project', component: CardProjectComponent },
  {
    path: 'home/letter-matching-project',
    component: LetterMatchingProjectComponent,
  },
  { path: 'home/directives-project', component: DirectivesProjectComponent },
  {
    path: 'home/rst-project',
    component: RstMainComponent,
    children: [
      { path: '', component: RstHomeComponent },
      { path: 'home', component: RstHomeComponent },
      { path: 'placeholders', component: RstPlaceholdersComponent },
      {
        path: 'tables',
        component: RstTablesComponent,
        children: [
          { path: '', component: RstSurveyComponent },
          { path: 'survey-one', component: RstSurveyComponent },
          { path: 'survey-two', component: RstSurveyTwoComponent },
        ],
      },
      { path: 'lists', component: RstListsComponent },
      { path: 'popups', component: RstPopupsComponent },
      { path: '**', component: RstErrorComponent },
    ],
  },
  {
    path: 'home/reactive-form-project',
    component: ReactiveFormProjectComponent,
  },
  { path: 'home/rxjs-project', component: RxjsProjectComponent },
  { path: 'home/random-image-project', component: RandomImageProjectComponent },
  {
    path: 'home/correct-answer-project',
    component: CorrectAnswerProjectComponent,
  },
  // Error page son path olmalıdır!!!
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
