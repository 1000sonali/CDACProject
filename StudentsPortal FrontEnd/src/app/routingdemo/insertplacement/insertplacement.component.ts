import { Component, OnInit } from '@angular/core';
import { Placement } from '../modules/placement.module';
import { PlacementService } from '../services/placement.service';

@Component({
  selector: 'app-insertplacement',
  templateUrl: './insertplacement.component.html',
  styleUrls: ['./insertplacement.component.css']
})
export class InsertplacementComponent implements OnInit {

  constructor(private svc:PlacementService) { }
  place: Placement = new Placement();
  submitted

  ngOnInit(): void {
  }
  
  saveCourse() {
    this.svc.createRecord(this.place)
      .subscribe(data => console.log(data), error => console.log(error));
    this.place = new Placement();
    console.log("Record Inserted Successfully....");
  }

}
