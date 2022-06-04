import { Component, OnInit } from '@angular/core';
import { Hospede } from '../hospede.model';
import { HospedeService } from '../hospede.service';

@Component({
  selector: 'app-hospede-read',
  templateUrl: './hospede-read.component.html',
  styleUrls: ['./hospede-read.component.css']
})
export class HospedeReadComponent implements OnInit {

  hospedes!: Hospede[]
  displayedColumns = ['codigo', 'nome', 'cpf', 'celular', 'email', 'endereco', 'acao']

  constructor(private hospedeService: HospedeService) { }

  ngOnInit(): void {
    this.hospedeService.read().subscribe(hospedes => {
      this.hospedes = hospedes
      console.log(hospedes)  
    })
  }

}
