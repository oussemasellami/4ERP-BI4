import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormresidenceComponent } from './formresidence/formresidence.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { AddappartComponent } from './addappart/addappart.component';
import { UpdateappartComponent } from './updateappart/updateappart.component';

const ROUTES:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'residence',component:ResidenceComponent},
  {path:'appartment',component:AppartmentComponent},
  {path:'addappartment',component:AddappartComponent},
  {path:'appartment/update/:id',component:UpdateappartComponent},
  {path:'form',component:FormresidenceComponent},
 // {path:'**',component:NotfoundComponent} 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],exports:[RouterModule]
})
export class AppRoutingModule { }
