import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoService } from '../cargo.service';
import { Cargo } from '../cargo.model';

@Component({
  selector: 'app-cargo-create',
  templateUrl: './cargo-create.component.html',
  styleUrls: ['./cargo-create.component.css']
})
export class CargoCreateComponent implements OnInit {

  cargo: Cargo = {
    nome: ''
  }

  constructor(private cargoService: CargoService,
    private router: Router) { }
  
  ngOnInit(): void {    
  }

  createCargo(): void {
    this.cargoService.create(this.cargo).subscribe(() => {
      this.cargoService.showMessage('Cargo criado!')
      this.router.navigate(['/cargos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cargos'])
  } 
}
