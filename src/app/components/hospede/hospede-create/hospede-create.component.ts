import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospede } from '../hospede.model';
import { HospedeService } from '../hospede.service';


@Component({
  selector: 'app-hospede-create',
  templateUrl: './hospede-create.component.html',
  styleUrls: ['./hospede-create.component.css']
})
export class HospedeCreateComponent implements OnInit {

  hospede: Hospede = {
    nome: '',
    cpf: '',
    celular: '',
    email: '',
    endereco: ''
  }

  //importando productService
  constructor(private hospedeService: HospedeService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createHospede(): void {
    this.hospedeService.create(this.hospede).subscribe(() => {
      this.hospedeService.showMessage('Hospede criado!')
      this.router.navigate(['/hospedes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/hospedes'])
  }  
}