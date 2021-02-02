
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/loginauth/auth.service';
import { Courses } from '../modules/course.module';
import { ResthubService } from '../services/resthub.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  demo= '.xlsx';
  filename:string;
  courses:[];
  course:Courses;
  constructor(private svc:ResthubService, private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllCourses()
   // this.courses=this.svc.getAllCourses();
  }

  
  getAllCourses()
  {
    this.svc.getAllCourses().subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.courses=response['data']
        console.log(this.courses)
      }
      else
      {
        console.log(response['error'])
      }
    });

  }
 
  deleteCourse(id:number)
  {
    if(confirm("Are you sure to delete Notes"))

      this.svc.deleteCourse(id).subscribe(
        data => {
          console.log(data);
         this.getAllCourses();
        },
        error => console.log(error));
  }

  
 updateCourse(crs:Courses)
 {
    this.router.navigate(['updatecourse', crs]);
 }

 
 printComponent(cmpName) {
  console.log(cmpName);
  /*this.abc=document.getElementById(cmpName).innerHTML;
  console.log("id of component is"+this.abc);*/
 let printContents = document.getElementById(cmpName).innerHTML;
 console.log(printContents);
 let originalContents = document.body.innerHTML;

 document.body.innerHTML = printContents;

 window.print();

 document.body.innerHTML = originalContents;
}

 exportexcel(): void
  {
    this.filename=prompt('Enter Your Filename');
   this.filename=this.filename.concat(this.demo);
    console.log(this.filename);
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.filename);
 
  }
}
