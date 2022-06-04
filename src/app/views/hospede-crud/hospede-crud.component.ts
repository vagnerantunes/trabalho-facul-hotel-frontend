import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospede-crud',
  templateUrl: './hospede-crud.component.html',
  styleUrls: ['./hospede-crud.component.css']
})
export class HospedeCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHospedeCreate(): void{
    this.router.navigate(['/hospedes/create'])
  }

}
