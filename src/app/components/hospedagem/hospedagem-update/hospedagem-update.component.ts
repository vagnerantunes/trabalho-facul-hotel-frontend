import { Component, OnInit } from '@angular/core';
import { HospedagemService } from '../hospedagem.service';
import { Hospedagem } from '../hospedagem.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospedagem-update',
  templateUrl: './hospedagem-update.component.html',
  styleUrls: ['./hospedagem-update.component.css']
})
export class HospedagemUpdateComponent implements OnInit {

  hospedagem!: Hospedagem;

  constructor(private hospedagemService: HospedagemService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.hospedagemService.readById(id!).subscribe((hospedagem: Hospedagem) =>{
      this.hospedagem = hospedagem
    })
  }

  updateHospedagem(): void {
    this.hospedagemService.update(this.hospedagem).subscribe(() => {
      this.hospedagemService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/hospedagens'])
    })
  }

  cancel(): void {
    this.router.navigate(['/hospedagens'])
  }

}
