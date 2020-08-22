import { AlunoCrudComponent } from './components/views/aluno-crud/aluno-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ProfessorCrudComponent } from './components/views/professor-crud/professor-crud.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aluno', component: AlunoCrudComponent },
  { path: 'professor', component: ProfessorCrudComponent },
  { path: 'aluno/create', component: AlunoCreateComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
