import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { DropdownService } from '../dropdown.service';
import { Cargo } from '../../cargo/cargo.model';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  funcionario!: Funcionario;

  cargos!: Cargo[];

  constructor(private funcionarioService: FuncionarioService, private dropdownService: DropdownService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionarioService.readById(id!).subscribe(funcionario => {
      this.funcionario = funcionario
    });

    this.dropdownService.readCargos().subscribe(dados => {
      this.cargos = dados;
    })
  }

  updateFuncionario(): void{
    this.funcionarioService.update(this.funcionario).subscribe(() => {
      this.funcionarioService.showMessage("Funcionário Atualizado!");
      this.cancel()
    });
  }

  cancel(): void{
    this.router.navigate(["/funcionarios"]);
  }

}