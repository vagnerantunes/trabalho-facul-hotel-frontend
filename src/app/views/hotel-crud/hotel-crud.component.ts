import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-crud',
  templateUrl: './hotel-crud.component.html',
  styleUrls: ['./hotel-crud.component.css']
})
export class HotelCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {   
  }

  navigateToHotelCreate(): void {
    this.router.navigate(['/hoteis/create'])
  }
}
