import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.css']
})
export class HotelCreateComponent implements OnInit {

  hotel: Hotel = {
    nomeFantasia: '',
    cnpj: ''
  }

  constructor(
    private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createHotel(): void {
    this.hotelService.create(this.hotel).subscribe(() =>{
      this.hotelService.showMessage('Hotel criado!')
      this.router.navigate(['/hoteis'])
    })
  }

  cancel(): void {
    this.router.navigate(['/hoteis'])
  }
  
}
