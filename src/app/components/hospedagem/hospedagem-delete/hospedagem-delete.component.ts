import { Component, OnInit } from '@angular/core';
import { HospedagemService } from '../hospedagem.service';
import { Hospedagem } from '../hospedagem.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospedagem-delete',
  templateUrl: './hospedagem-delete.component.html',
  styleUrls: ['./hospedagem-delete.component.css']
})
export class HospedagemDeleteComponent implements OnInit {

  hospedagem!: Hospedagem;

  constructor(
    private hospedagemService: HospedagemService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hospedagemService.readById(id!).subscribe(hospedagem =>{
      this.hospedagem = hospedagem
    })
  }

  deleteHospedagem(): void {
    this.hospedagemService.delete(this.hospedagem.id!).subscribe(() =>{
    this.hospedagemService.showMessage('Hospedagem excluido com sucesso!')  
    this.router.navigate(['/hospedagens'])
    })
  }

  cancel(): void{
    this.router.navigate(['/hospedagens'])
  }
}