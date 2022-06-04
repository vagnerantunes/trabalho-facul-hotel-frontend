import { Component, OnInit } from '@angular/core';
import { Hospede } from '../hospede.model';
import { HospedeService } from '../hospede.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospede-delete',
  templateUrl: './hospede-delete.component.html',
  styleUrls: ['./hospede-delete.component.css']
})
export class HospedeDeleteComponent implements OnInit {

  hospede!: Hospede;

  constructor(
    private hospedeService: HospedeService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    this.hospedeService.readById(codigo!).subscribe(hospede =>{
      this.hospede = hospede
    })
  }

  deleteHospede(): void {
    this.hospedeService.delete(this.hospede.codigo!).subscribe(() =>{
    this.hospedeService.showMessage('Hospede excluido com sucesso!')  
    this.router.navigate(['/hospedes'])
    })
  }

  cancel(): void{
    this.router.navigate(['/hospedes'])
  }
}