import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from '../cargo.model';
import { CargoService } from '../cargo.service';

@Component({
  selector: 'app-cargo-update',
  templateUrl: './cargo-update.component.html',
  styleUrls: ['./cargo-update.component.css']
})
export class CargoUpdateComponent implements OnInit {

  cargo!: Cargo;

  constructor(private cargoService: CargoService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cargoService.readById(id!).subscribe((cargo: Cargo) =>{
      this.cargo = cargo
    })
  }

  updateCargo(): void {
    this.cargoService.update(this.cargo).subscribe(() => {
      this.cargoService.showMessage('Cargo atualizado com sucesso!')
      this.router.navigate(['/cargos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cargos'])
  }

}
