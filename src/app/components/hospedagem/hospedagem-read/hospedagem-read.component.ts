import { Component, OnInit } from '@angular/core';
import { HospedagemService } from '../hospedagem.service';
import { Hospedagem } from '../hospedagem.model';

@Component({
  selector: 'app-hospedagem-read',
  templateUrl: './hospedagem-read.component.html',
  styleUrls: ['./hospedagem-read.component.css']
})
export class HospedagemReadComponent implements OnInit {

  hospedagens!: Hospedagem[]
  displayedColumns = ['id', 'entrada', 'saida', 'acao']

  constructor(private hospedagemService: HospedagemService) { }

  ngOnInit(): void {
    this.hospedagemService.read().subscribe(hospedagens => {
      this.hospedagens = hospedagens
      console.log(hospedagens)  
    })
  }

}