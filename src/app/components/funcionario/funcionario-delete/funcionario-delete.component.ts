import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent implements OnInit {

  funcionario!: Funcionario;

  constructor(
    private funcionarioService: FuncionarioService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionarioService.readById(id!).subscribe(funcionario =>{
      this.funcionario = funcionario
    })
  }

  deleteFuncionario(): void {
    this.funcionarioService.delete(this.funcionario.id!).subscribe(() =>{
    this.funcionarioService.showMessage('Funcionário excluido com sucesso!')  
    this.cancel();
    })
  }

  cancel(): void{
    this.router.navigate(['/funcionarios'])
  }
}