import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacementService } from '../services/placement.service';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

    
placements:[];

constructor(private svc:PlacementService, private router: Router) { }

ngOnInit(): void {
  this.getAllRecords()
}


getAllRecords()
{
  this.svc.getAllPlaced().subscribe((response: { [x: string]: any; })=>
  {
    console.log(response)
    if(response['status']=='success')
    {
      this.placements=response['data']
      console.log(this.placements)
    }
    else
    {
      console.log(response['error'])
    }
  });

}

}
