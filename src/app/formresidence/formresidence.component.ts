import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formresidence',
  templateUrl: './formresidence.component.html',
  styleUrls: ['./formresidence.component.css']
})
export class FormresidenceComponent implements OnInit {
  f!:FormGroup

  ngOnInit(): void {
    this.f=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      address:new FormControl('',[Validators.required,Validators.minLength(3)])

    })

  }
  get name(){ return this.f.get('name')}

  add(){
    console.log("notre form : "+JSON.stringify(this.f.value))

  }


}
