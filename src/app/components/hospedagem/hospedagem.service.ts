import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Hospedagem } from './hospedagem.model';

@Injectable({
  providedIn: 'root'
})
export class HospedagemService {

  baseUrl = "http://localhost:3001/hospedagens"  

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(hospedagem: Hospedagem): Observable<Hospedagem>{
    return this.http.post<Hospedagem>(this.baseUrl, hospedagem)
  }

  read(): Observable<Hospedagem[]>{
    return this.http.get<Hospedagem[]>(this.baseUrl)
  }

  readById(id: string): Observable<Hospedagem>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Hospedagem>(url)
  }
 
  update(hospedagem: Hospedagem): Observable<Hospedagem>{
    const url = `${this.baseUrl}/${hospedagem.id}`
    return this.http.put<Hospedagem>(url, hospedagem)
  }
  
  delete(id: number): Observable<Hospedagem>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Hospedagem>(url)
  }

}
