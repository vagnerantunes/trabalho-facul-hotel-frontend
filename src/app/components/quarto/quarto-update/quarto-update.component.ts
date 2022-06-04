import { Component, OnInit } from '@angular/core';
import { Quarto } from './../quarto.model';
import { QuartoService } from './../quarto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quarto-update',
  templateUrl: './quarto-update.component.html',
  styleUrls: ['./quarto-update.component.css']
})
export class QuartoUpdateComponent implements OnInit {

  quarto!: Quarto;

  constructor(private quartoService: QuartoService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.quartoService.readById(id!).subscribe((quarto: Quarto) =>{
      this.quarto = quarto
    })
  }

  updateQuarto(): void {
    this.quartoService.update(this.quarto).subscribe(() => {
      this.quartoService.showMessage('Quarto atualizado com sucesso!')
      this.router.navigate(['/quartos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/quartos'])
  }

}

