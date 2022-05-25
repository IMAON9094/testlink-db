import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LoginteacherComponent } from './login/loginteacher/loginteacher.component';
import { Content1Component } from './student/content1/content1.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: 'login',component: LoginComponent},
  {path: 'loginteacher',component: LoginteacherComponent},
  {path: 'student',
  //component: StudentComponent,
  loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
  },
  {path: 'admin',component: AdminComponent},
  //{path: 'content1',component: Content1Component},
  //{path: 'content2',component: Content1Component},
  //{path: 'content3',component: Content1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
