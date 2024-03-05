import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../services/residence.service';
import { Apartment } from '../models/apartment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements OnInit {

  listappart:Apartment[]=[]
  constructor(private x:ResidenceService,private route:Router){}
ngOnInit(): void {
  this.x.getapprt().subscribe((data)=>{
this.listappart=data
  })
}

deleteappart(id:number){
  //console.
  this.x.deleteapprt(id).subscribe(()=>{
    console.log("deleted")
    window.location.reload()
  })

}

redirect(){
  this.route.navigate(['/addappartment'])

}
}
