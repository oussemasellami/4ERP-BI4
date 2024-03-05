import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
appartUrl="http://localhost:3000/appartement"
  constructor(private http:HttpClient) { }
  getnumber(){
    console.log("salut 4bi4")
  }
  getnumber1(list:any,creteria:string,value:any){
   // console.log("salut 4bi4")
    let n=0
    for(let i in list){
      if(list[i][creteria]==value){
        n++
      }
    }
    return n
  }

getapprt():Observable<Apartment[]>{
return this.http.get<Apartment[]>(this.appartUrl)
}

addapprt(appart:Apartment):Observable<Apartment[]>{
  return this.http.post<Apartment[]>(this.appartUrl ,appart)
  }
  deleteapprt(id:number):Observable<Apartment[]>{
    return this.http.delete<Apartment[]>(this.appartUrl+'/'+id)
    }
    getbyidapprt(id:number):Observable<Apartment[]>{
      return this.http.get<Apartment[]>(this.appartUrl+'/'+id)
      }
    updateapprt(id:number,appart:Apartment):Observable<Apartment[]>{
      return this.http.put<Apartment[]>(this.appartUrl+'/'+id,appart)
      }

}
