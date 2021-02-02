import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlacementComponent } from './placement/placement.component';
import { CourseComponent } from './course/course.component';
import { SubjectInsertComponent } from './subject-insert/subject-insert.component';
import { CourseInsertComponent } from './course-insert/course-insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { SubjectComponent } from './subject/subject.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { RegisterfacultyComponent } from './registerfaculty/registerfaculty.component';
import { InsertplacementComponent } from './insertplacement/insertplacement.component';
import { UpdateplacementComponent } from './updateplacement/updateplacement.component';
import { AuthService } from '../loginauth/auth.service';
import { DashboardComponent } from '../loginauth/dashboard/dashboard.component';
import { LoginauthModule } from '../loginauth/loginauth.module';
import {NewguardGuard} from '../loginauth/newguard.guard';
import { ExamscheduleComponent } from './examschedule/examschedule.component';
import { ExamscheduleInsertComponent } from './examschedule-insert/examschedule-insert.component';
import { UpdateExamComponent } from './update-exam/update-exam.component';
import { RoutecourseComponent } from './routecourse/routecourse.component';
import { HeadersComponent } from './headers/headers.component';
import { BlankComponent } from './blank/blank.component';
import { AdminstudentComponent } from './adminstudent/adminstudent.component';
import { AdminfacultyComponent } from './adminfaculty/adminfaculty.component';
import { NotesComponent } from './notes/notes.component';
import { DailyscheduleComponent } from './dailyschedule/dailyschedule.component';
import { NotesInsertComponent } from './notes-insert/notes-insert.component';
import { NotesUpdateComponent } from './notes-update/notes-update.component';
import { DailyscheduleInsertComponent } from './dailyschedule-insert/dailyschedule-insert.component';
import { DailyscheduleUpdateComponent } from './dailyschedule-update/dailyschedule-update.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { AssignmentInsertComponent } from './assignment-insert/assignment-insert.component';
import { AssignmentUpdateComponent } from './assignment-update/assignment-update.component';
import { ClassroomInsertComponent } from './classroom-insert/classroom-insert.component';
import { ClassroomUpdateComponent } from './classroom-update/classroom-update.component';
import { AdminstudentInsertComponent } from './adminstudent-insert/adminstudent-insert.component';
import { AdminstudentUpdateComponent } from './adminstudent-update/adminstudent-update.component';
import { AdminfacultyInsertComponent } from './adminfaculty-insert/adminfaculty-insert.component';
import { AdminfacultyUpdateComponent } from './adminfaculty-update/adminfaculty-update.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { UsermoduleModule } from '../usermodule/usermodule.module';
import { HeaderComponent } from './header/header.component';
import { AnnouncementInsertComponent } from './announcement-insert/announcement-insert.component';
import { AdminupdatepassComponent } from './adminupdatepass/adminupdatepass.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



const routes:Routes=[
 
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'registerfaculty',component:RegisterfacultyComponent},
  {path:'placements',component:PlacementComponent , canActivate: [NewguardGuard]},
  {path:'course',component:CourseComponent, canActivate: [NewguardGuard] },
 {path:'faculty',component:FacultyComponent, canActivate: [NewguardGuard] },
 {path:'student',component:StudentComponent, canActivate: [NewguardGuard] },
  {path:'insertcourse',component:CourseInsertComponent, canActivate: [NewguardGuard]},
  {path:'updatecourse',component:UpdateCourseComponent, canActivate: [NewguardGuard]},
  {path:'subject',component:SubjectComponent , canActivate: [NewguardGuard]},
  {path:'updatesubject',component:UpdateSubjectComponent, canActivate: [NewguardGuard]},
  {path:'insertsubject',component:SubjectInsertComponent, canActivate: [NewguardGuard]},
  {path:'placement',component:PlacementComponent, canActivate: [NewguardGuard]},
  {path:'insertrecord',component:InsertplacementComponent, canActivate: [NewguardGuard]},
  {path:'updaterecord',component:UpdateplacementComponent, canActivate: [NewguardGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [NewguardGuard] },
  {path:'examschedule',component:ExamscheduleComponent, canActivate: [NewguardGuard]},
  {path:'insertexam',component:ExamscheduleInsertComponent, canActivate: [NewguardGuard]},
  {path:'updateexam',component:UpdateExamComponent, canActivate: [NewguardGuard]},
  {path:'routecourse',component:RoutecourseComponent, canActivate: [NewguardGuard]},
  {path:'notes',component:NotesComponent, canActivate: [NewguardGuard]},
  {path:'updatenotes',component:NotesUpdateComponent, canActivate: [NewguardGuard]},
  {path:'insertnotes',component:NotesInsertComponent, canActivate: [NewguardGuard]},
  {path:'dailyschedule',component:DailyscheduleComponent, canActivate: [NewguardGuard]},
  {path:'updateschedule',component:DailyscheduleUpdateComponent, canActivate: [NewguardGuard]},
  {path:'insertschedule',component:DailyscheduleInsertComponent, canActivate: [NewguardGuard]},
  {path:'assignment',component:AssignmentComponent, canActivate: [NewguardGuard]},
  {path:'updateassignment',component:AssignmentUpdateComponent, canActivate: [NewguardGuard]},
  {path:'insertassignment',component:AssignmentInsertComponent, canActivate: [NewguardGuard]},
  {path:'classroom',component:ClassroomComponent, canActivate: [NewguardGuard]},
  {path:'updateclassroom',component:ClassroomUpdateComponent, canActivate: [NewguardGuard]},
  {path:'insertclassroom',component:ClassroomInsertComponent, canActivate: [NewguardGuard]},
  {path:'adminstudent',component:AdminstudentComponent, canActivate: [NewguardGuard]},
  {path:'updateadminstudent',component:AdminstudentUpdateComponent, canActivate: [NewguardGuard]},
  {path:'insertadminstudent',component:AdminstudentInsertComponent, canActivate: [NewguardGuard]},
  {path:'adminfaculty',component:AdminfacultyComponent, canActivate: [NewguardGuard]},
  {path:'updateadminfaculty',component:AdminfacultyUpdateComponent, canActivate: [NewguardGuard]},
  {path:'insertadminfaculty',component:AdminfacultyInsertComponent, canActivate: [NewguardGuard]},
  {path:'announcement',component:AnnouncementInsertComponent, canActivate: [NewguardGuard]},
  {path:'updateadmin',component:AdminupdatepassComponent, canActivate: [NewguardGuard]},
  {path:'forgotpass',component:ForgotPasswordComponent},
  
]
@NgModule({
  declarations: [HomeComponent, AboutusComponent, 
    ContactusComponent, LoginComponent, RegisterComponent,
    PlacementComponent,
    CourseComponent,
    SubjectInsertComponent,
    CourseInsertComponent,
    UpdateCourseComponent,
    SubjectComponent,
    UpdateSubjectComponent,
    RegisterfacultyComponent,
    InsertplacementComponent,
    UpdateplacementComponent,
    ExamscheduleComponent,
    ExamscheduleInsertComponent,
    UpdateExamComponent,
    RoutecourseComponent,
    HeadersComponent,
    BlankComponent,
    AdminstudentComponent,
    AdminfacultyComponent,
    NotesComponent,
    DailyscheduleComponent,
    NotesInsertComponent,
    NotesUpdateComponent,
    DailyscheduleInsertComponent,
    DailyscheduleUpdateComponent,
    AssignmentComponent,
    ClassroomComponent,
    AssignmentInsertComponent,
    AssignmentUpdateComponent,
    ClassroomInsertComponent,
    ClassroomUpdateComponent,
    AdminstudentInsertComponent,
    AdminstudentUpdateComponent,
    AdminfacultyInsertComponent,
    AdminfacultyUpdateComponent,
    FacultyComponent,
    StudentComponent,
    HeaderComponent,
    AnnouncementInsertComponent,
    AdminupdatepassComponent,
    ForgotPasswordComponent,
   
   ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    LoginauthModule,
    FormsModule,
    ReactiveFormsModule,
    UsermoduleModule
  ],
  exports: [HomeComponent, AboutusComponent, 
    ContactusComponent,HeadersComponent,BlankComponent],
    providers:[AuthService]
})
export class RoutingdemoModule { }
