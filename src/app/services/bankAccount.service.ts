import { Injectable } from "@angular/core";
import {  HttpClient  } from '@angular/common/http';
import { Account } from '../account';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BankAccountService {
    accApiUrl:string='http://localhost:3000/account';

    constructor(private http: HttpClient) {}
    
   
    fetchData(): Observable<Account[]>{
        return this.http.get<Account[]>(this.accApiUrl);
    }


    }

