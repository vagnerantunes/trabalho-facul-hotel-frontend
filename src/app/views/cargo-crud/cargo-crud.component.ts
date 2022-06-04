import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargo-crud',
  templateUrl: './cargo-crud.component.html',
  styleUrls: ['./cargo-crud.component.css']
})
export class CargoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCargoCreate(): void{
    this.router.navigate(['/cargos/create'])
  }

}
