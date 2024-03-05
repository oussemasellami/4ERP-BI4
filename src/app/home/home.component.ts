import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router,private residenceservice:ResidenceService){}

  redirect(){
this.router.navigate(['/form'])
  }
  getnumber(){

    this.residenceservice.getnumber()
  }
}
