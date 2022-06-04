import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel.model';

@Component({
  selector: 'app-hotel-read',
  templateUrl: './hotel-read.component.html',
  styleUrls: ['./hotel-read.component.css']
})
export class HotelReadComponent implements OnInit {

  hoteis!: Hotel[]
  displayedColumns = ['codigo', 'nomeFantasia', 'acao']

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.read().subscribe(hoteis =>{
      this.hoteis = hoteis
      console.log(hoteis)
    })
  }

}
