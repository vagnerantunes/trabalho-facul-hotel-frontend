import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Quarto } from './quarto.model';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {

  baseUrl = "http://localhost:3001/quartos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(quarto: Quarto): Observable<Quarto>{
    return this.http.post<Quarto>(this.baseUrl, quarto)
  }

  read(): Observable<Quarto[]>{
    return this.http.get<Quarto[]>(this.baseUrl)
  }

  readById(id: string): Observable<Quarto>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Quarto>(url)
  }
 
  update(quarto: Quarto): Observable<Quarto>{
    const url = `${this.baseUrl}/${quarto.id}`
    return this.http.put<Quarto>(url, quarto)
  }
  
  delete(id: number): Observable<Quarto>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Quarto>(url)
  }
}  
