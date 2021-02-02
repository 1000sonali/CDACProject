import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Placement } from '../modules/placement.module';
import { PlacementService } from '../services/placement.service';

@Component({
  selector: 'app-updateplacement',
  templateUrl: './updateplacement.component.html',
  styleUrls: ['./updateplacement.component.css']
})
export class UpdateplacementComponent implements OnInit {

  id:string;
  place:Placement;
  updt:Placement;
  
  
    constructor(private svc:PlacementService, private route: ActivatedRoute, private router:Router) { }
  
    ngOnInit() {
      this.place = new Placement();
      this.updt=new Placement();
      this.id = this.route.snapshot.params['prn'];
      console.log(this.id);
      this.svc.getPlaced(this.id)
      .subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.place=response['data'];
          this.updt=this.place;
          this.updt.batch=this.place.batch;
          console.log(this.updt);
         
        }
        else
        {
          console.log(response['error'])
        }
      });
    }
  
  
    updatePlacement()
    {  
          this.updt.studentname=this.place.studentname;
          this.updt.companyname=this.place.companyname;
          this.updt.coursename=this.place.coursename;
          this.updt.batch=this.place.batch;

          console.log(this.updt);
  
      this.svc.updateRecord(this.updt)
      .subscribe(data => console.log(data),
       error => console.log(error));
      this.place = new Placement();
      this.router.navigate(['placement'])  ;
    }
    

}
