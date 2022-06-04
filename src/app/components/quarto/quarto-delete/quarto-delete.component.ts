import { Component, OnInit } from '@angular/core';
import { Quarto } from './../quarto.model';
import { QuartoService } from './../quarto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quarto-delete',
  templateUrl: './quarto-delete.component.html',
  styleUrls: ['./quarto-delete.component.css']
})
export class QuartoDeleteComponent implements OnInit {

  quarto!: Quarto;

  constructor(
    private quartoService: QuartoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quartoService.readById(id!).subscribe(quarto =>{
      this.quarto = quarto
    })
  }

  deleteQuarto(): void {
    this.quartoService.delete(this.quarto.id!).subscribe(() =>{
    this.quartoService.showMessage('Quarto excluido com sucesso!')  
    this.router.navigate(['/quartos'])
    })
  }

  cancel(): void{
    this.router.navigate(['/quartos'])
  }
}
