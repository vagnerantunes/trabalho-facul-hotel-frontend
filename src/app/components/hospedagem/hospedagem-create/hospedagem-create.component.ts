import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospedagemService } from '../hospedagem.service';
import { Hospedagem } from '../hospedagem.model';

@Component({
  selector: 'app-hospedagem-create',
  templateUrl: './hospedagem-create.component.html',
  styleUrls: ['./hospedagem-create.component.css']
})
export class HospedagemCreateComponent implements OnInit {

  hospedagem: Hospedagem = {
    entrada: new Date(),
    saida: new Date(),
  }

  constructor(private hospedagemService: HospedagemService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createHospedagem(): void {
    this.hospedagemService.create(this.hospedagem).subscribe(() => {
      this.hospedagemService.showMessage('Hospedagem criado!')
      this.router.navigate(['/hospedagens'])
    })
  }

  cancel(): void {
    this.router.navigate(['/hospedagens'])
  }  

}
