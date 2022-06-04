import { Component, OnInit } from '@angular/core';
import { Hospede } from '../hospede.model';
import { HospedeService } from '../hospede.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospede-update',
  templateUrl: './hospede-update.component.html',
  styleUrls: ['./hospede-update.component.css']
})
export class HospedeUpdateComponent implements OnInit {

  hospede!: Hospede;

  constructor(private hospedeService: HospedeService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo')
    this.hospedeService.readById(codigo!).subscribe((hospede: Hospede) =>{
      this.hospede = hospede
    })
  }

  updateHospede(): void {
    this.hospedeService.update(this.hospede).subscribe(() => {
      this.hospedeService.showMessage('Hospede atualizado com sucesso!')
      this.router.navigate(['/hospedes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/hospedes'])
  }

}
