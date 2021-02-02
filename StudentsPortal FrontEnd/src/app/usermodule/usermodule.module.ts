import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutecoursesComponent } from './routecourses/routecourses.component';
import { DashboardComponent } from '../loginauth/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutussComponent } from './aboutuss/aboutuss.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { ContactussComponent } from './contactuss/contactuss.component';
import { CoursesComponent } from './courses/courses.component';
import { DailyschedulesComponent } from './dailyschedules/dailyschedules.component';
import { ExamschedulesComponent } from './examschedules/examschedules.component';
import { HeaderssComponent } from './headerss/headerss.component';
import { HomesComponent } from './homes/homes.component';
import { NotessComponent } from './notess/notess.component';
import { PlacementsComponent } from './placements/placements.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterUpdateComponent } from './register-update/register-update.component';
import { RegisterfacultyUpdateComponent } from './registerfaculty-update/registerfaculty-update.component';
import { StdguardGuard } from '../loginauth/stdguard.guard';
const routes:Routes=[
 
  {path:'stdhome',component:HomesComponent , canActivate: [StdguardGuard] },
  {path:'stdaboutus',component:AboutussComponent, canActivate: [StdguardGuard] },
  {path:'stdcontactus',component:ContactussComponent, canActivate: [StdguardGuard] },
  {path:'stdplacements',component:PlacementsComponent, canActivate: [StdguardGuard] },
  {path:'stdcourse',component:CoursesComponent, canActivate: [StdguardGuard]  },  
  {path:'stdsubject',component:SubjectsComponent, canActivate: [StdguardGuard]  }, 
  {path:'stdplacement',component:PlacementsComponent, canActivate: [StdguardGuard] },  
  {path: 'stddashboard', component: DashboardComponent , canActivate: [StdguardGuard] },
  {path:'stdexamschedule',component:ExamschedulesComponent, canActivate: [StdguardGuard] },  
  {path:'stdroutecourse',component:RoutecoursesComponent, canActivate: [StdguardGuard] },
  {path:'stdnotes',component:NotessComponent, canActivate: [StdguardGuard] },  
  {path:'stddailyschedule',component:DailyschedulesComponent, canActivate: [StdguardGuard] },  
  {path:'stdassignment',component:AssignmentsComponent, canActivate: [StdguardGuard] }, 
  {path:'stdclassroom',component:ClassroomsComponent, canActivate: [StdguardGuard] },
  {path:'stdupdatestudent',component:RegisterUpdateComponent, canActivate: [StdguardGuard] },
  {path:'stdupdatefaculty',component:RegisterfacultyUpdateComponent, canActivate: [StdguardGuard] },
]

@NgModule({
  declarations: [AboutussComponent,
       ClassroomsComponent, ContactussComponent, CoursesComponent,
      DailyschedulesComponent,  ExamschedulesComponent, HeaderssComponent, HomesComponent, 
      NotessComponent, PlacementsComponent, 
       SubjectsComponent, AssignmentsComponent, 
        RoutecoursesComponent, RegisterUpdateComponent, RegisterfacultyUpdateComponent],
  imports: [
    CommonModule,
    BrowserModule,
      RouterModule.forRoot(routes),
      FormsModule 
  ],
  exports:[
    AboutussComponent,
       ClassroomsComponent, ContactussComponent, CoursesComponent,
      DailyschedulesComponent,  ExamschedulesComponent, HeaderssComponent, HomesComponent, 
       NotessComponent, PlacementsComponent, 
       SubjectsComponent, AssignmentsComponent, 
        RoutecoursesComponent
  ]
})
export class UsermoduleModule { }