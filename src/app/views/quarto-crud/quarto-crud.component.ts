import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quarto-crud',
  templateUrl: './quarto-crud.component.html',
  styleUrls: ['./quarto-crud.component.css']
})
export class QuartoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToQuartoCreate(): void{
    this.router.navigate(['/quartos/create'])
  }

}
