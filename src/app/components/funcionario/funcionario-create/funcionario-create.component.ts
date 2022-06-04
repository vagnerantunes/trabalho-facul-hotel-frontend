import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from './../../cargo/cargo.model';
import { Funcionario } from '../funcionario.model';
import { CargoService } from '../../cargo/cargo.service';
import { FuncionarioService } from '../funcionario.service';
import { DropdownService } from '../dropdown.service';
import { isNull } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = {
    nome: '',
    cpf: '',
    cargo: 1
  }

  cargo!: Cargo[];
  
  constructor(private funcionarioService: FuncionarioService, private router: Router, private dropdownService: DropdownService ) { }

  ngOnInit(): void {
    this.dropdownService.readCargos().subscribe(dados => {
      this.cargo = dados;
      console.log(dados);
    });
  }
  
  createFuncionario():void{
    this.funcionarioService.create(this.funcionario).subscribe(() => {this.funcionarioService.showMessage("Funcionário criado!")});
    this.ngOnInit();
    this.cancel();

    
  }

  cancel(): void{
    this.router.navigate(["/funcionarios"]);
  }
}