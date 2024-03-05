import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';
import { Apartment } from '../models/apartment';

@Component({
  selector: 'app-updateappart',
  templateUrl: './updateappart.component.html',
  styleUrls: ['./updateappart.component.css']
})
export class UpdateappartComponent implements OnInit {
addform!:FormGroup
  constructor(private act:ActivatedRoute,
    private residence:ResidenceService,
    private route:Router){}
id!:number
res:Residence={
  "id": 1,
  "name": "El fel",
  "address": "Borj Cedria",
  "image": "../../assets/images/residence1.jpg"
}
listappart:Apartment[]=[]
  ngOnInit(): void {
    this.id=this.act.snapshot.params['id']

    this.addform=new FormGroup({
      appartNum:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      residence:new FormControl(this.res,Validators.required),
    })

    this.residence.getbyidapprt(this.id).subscribe((data)=>{
this.listappart=data
this.addform.patchValue(this.listappart as any)
    })
    
    
  }

  update(){
    this.residence.updateapprt(this.id,this.addform.value).subscribe(()=>{
      console.log('updated')
      this.route.navigate(['/appartment'])
    })

  }
}
