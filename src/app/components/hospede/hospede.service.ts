import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Hospede } from './hospede.model';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  baseUrl = "http://localhost:8080/hospedes"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(hospede: Hospede): Observable<Hospede>{
    return this.http.post<Hospede>(this.baseUrl, hospede)
  }

  read(): Observable<Hospede[]>{
    return this.http.get<Hospede[]>(this.baseUrl)
  }

  readById(codigo: string): Observable<Hospede>{
    const url = `${this.baseUrl}/${codigo}`
    return this.http.get<Hospede>(url)
  }
 
  update(hospede: Hospede): Observable<Hospede>{
    const url = `${this.baseUrl}/${hospede.codigo}`
    return this.http.put<Hospede>(url, hospede)
  }
  
  delete(codigo: number): Observable<Hospede>{    
    const url = `${this.baseUrl}/${codigo}`
    return this.http.delete<Hospede>(url)
  }
  
}  
