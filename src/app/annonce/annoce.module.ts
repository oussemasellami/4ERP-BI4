import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoceRoutingModule } from './annoce-routing.module';
import { ListannonceComponent } from './listannonce/listannonce.component';
import { AnnonceComponent } from './annonce.component';



@NgModule({
  declarations: [
    AnnonceComponent,
    ListannonceComponent
  ],
  imports: [
    CommonModule,
    AnnoceRoutingModule
  ]
})
export class AnnoceModule { }
