import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cargo } from '../cargo/cargo.model';
import { CargoService } from '../cargo/cargo.service';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  baseUrl = "http://localhost:8080/cargos";

  constructor(private http: HttpClient) { }

  readCargos(){
    return this.http.get<Cargo[]>(this.baseUrl);
  }

  createCargo(Cargo: Cargo): Observable<Cargo>{
    return this.http.post<Cargo>(this.baseUrl, Cargo)
  }

  /*
  create(Cargo: Cargo): Observable<Cargo>{
    return this.http.post<Cargo>(this.baseUrl, Cargo)
  }

  read(): Observable<Cargo[]>{
    return this.http.get<Cargo[]>(this.baseUrl)
  }

  readById(codigo: string): Observable<Cargo>{
    const url = `${this.baseUrl}/${codigo}`
    return this.http.get<Cargo>(url)
  }
 
  update(cargo: Cargo): Observable<Cargo>{
    const url = `${this.baseUrl}/${cargo.codigo}`
    return this.http.put<Cargo>(url, cargo)
  }
  
  delete(codigo: number): Observable<Cargo>{    
    const url = `${this.baseUrl}/${codigo}`
    return this.http.delete<Cargo>(url)
  }
  */
}
