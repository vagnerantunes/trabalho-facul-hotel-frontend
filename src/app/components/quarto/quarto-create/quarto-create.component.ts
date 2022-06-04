import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuartoService } from '../quarto.service';
import { Quarto } from '../quarto.model';

@Component({
  selector: 'app-quarto-create',
  templateUrl: './quarto-create.component.html',
  styleUrls: ['./quarto-create.component.css']
})
export class QuartoCreateComponent implements OnInit {

  quarto: Quarto = {
    numero: 0
  }


  constructor(private quartoService: QuartoService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createQuarto(): void {
    this.quartoService.create(this.quarto).subscribe(() => {
      this.quartoService.showMessage('Quarto criado!')
      this.router.navigate(['/quartos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/quartos'])
  }  
}
