import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Hotel } from './hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  baseUrl = "http://localhost:8080/hoteis"

  constructor(
    private scnakBar: MatSnackBar,
    private http: HttpClient) { }

    showMessage(msg: string): void{
      this.scnakBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }

    create(hotel: Hotel): Observable<Hotel>{
      return this.http.post<Hotel>(this.baseUrl, hotel)
    }

    read(): Observable<Hotel[]>{
      return this.http.get<Hotel[]>(this.baseUrl)
    }

    readById(codigo: string): Observable<Hotel>{
      const url = `${this.baseUrl}/${codigo}`
      return this.http.get<Hotel>(url)
    }

    update(hotel: Hotel): Observable<Hotel>{
      const url = `${this.baseUrl}/${hotel.codigo}`
      return this.http.put<Hotel>(url, hotel)
    }

    delete(codigo: number): Observable<Hotel>{
      const url = `${this.baseUrl}/${codigo}`
      return this.http.delete<Hotel>(url)
    }

}
