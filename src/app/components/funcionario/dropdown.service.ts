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

}
