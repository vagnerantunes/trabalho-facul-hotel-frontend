import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-hospedagem-crud',
  templateUrl: './hospedagem-crud.component.html',
  styleUrls: ['./hospedagem-crud.component.css']
})
export class HospedagemCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //criando interação com botoes
  navigateToHospedagensCreate(): void{
    this.router.navigate(['/hospedagens/create'])
  }

}
