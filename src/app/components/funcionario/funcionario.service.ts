import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Funcionario } from './funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = "http://localhost:8080/funcionarios"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(this.baseUrl, funcionario)
  }

  read(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.baseUrl)
  }

  readById(id: string): Observable<Funcionario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Funcionario>(url)
  }
 
  update(funcionario: Funcionario): Observable<Funcionario>{
    const url = `${this.baseUrl}/${funcionario.id}`
    return this.http.put<Funcionario>(url, funcionario)
  }
  
  delete(id: number): Observable<Funcionario>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Funcionario>(url)
  }
}  
