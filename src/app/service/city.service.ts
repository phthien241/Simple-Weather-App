import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({providedIn : 'root'})
export class CityService{
    private data = new BehaviorSubject<any>({})
    public sentData = this.data.asObservable();
    constructor(){}
    emitData(x: any){
        this.data.next(x);
    }

}