import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';
import { StudentComponent } from './student.component';

const stdroutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          { path: 'content1', component: Content1Component },
          { path: 'content2', component: Content2Component },
          { path: '', component: Content3Component }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(stdroutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
