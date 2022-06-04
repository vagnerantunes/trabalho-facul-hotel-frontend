import { Component, OnInit } from '@angular/core';
import { Quarto } from './../quarto.model';
import { QuartoService } from './../quarto.service';

@Component({
  selector: 'app-quarto-read',
  templateUrl: './quarto-read.component.html',
  styleUrls: ['./quarto-read.component.css']
})
export class QuartoReadComponent implements OnInit {

  quartos!: Quarto[]
  displayedColumns = ['id', 'numero', 'acao']

  constructor(private quartoService: QuartoService) { }

  ngOnInit(): void {
    this.quartoService.read().subscribe(quartos => {
      this.quartos = quartos
      console.log(quartos)  
    })
  }

}

