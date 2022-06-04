import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cargo } from './cargo.model';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl = "http://localhost:8080/cargos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(Cargo: Cargo): Observable<Cargo>{
    return this.http.post<Cargo>(this.baseUrl, Cargo)
  }

  read(): Observable<Cargo[]>{
    return this.http.get<Cargo[]>(this.baseUrl)
  }

  readById(id: string): Observable<Cargo>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cargo>(url)
  }
 
  update(cargo: Cargo): Observable<Cargo>{
    const url = `${this.baseUrl}/${cargo.id}`
    return this.http.put<Cargo>(url, cargo)
  }
  
  delete(id: number): Observable<Cargo>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cargo>(url)
  }
  
}
