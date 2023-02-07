import { LetterMatchingProjectComponent } from './component/letter-matching-project/letter-matching-project.component';
import { CardProjectComponent } from './component/card-project/card-project.component';
import { ErrorComponent } from './component/error/error.component';
import { PasswordProjectComponent } from './component/password-project/password-project.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'password-project', component: PasswordProjectComponent },
  { path: 'card-project', component: CardProjectComponent },
  {
    path: 'letter-matching-project',
    component: LetterMatchingProjectComponent,
  },

  // Error page son path olmalıdır!!!
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
