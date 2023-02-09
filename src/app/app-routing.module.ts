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
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'home/password-project', component: PasswordProjectComponent },
  { path: 'home/card-project', component: CardProjectComponent },
  {
    path: 'home/letter-matching-project',
    component: LetterMatchingProjectComponent,
  },
  { path: 'home/directives-project', component: DirectivesProjectComponent },

  // Error page son path olmalıdır!!!
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
