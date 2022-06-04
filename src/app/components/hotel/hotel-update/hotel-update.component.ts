import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel.model';
import { HotelService } from './../hotel.service';

@Component({
  selector: 'app-hotel-update',
  templateUrl: './hotel-update.component.html',
  styleUrls: ['./hotel-update.component.css']
})
export class HotelUpdateComponent implements OnInit {

  hotel!: Hotel;

  constructor(
    private hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      const codigo = this.route.snapshot.paramMap.get('codigo')
      this.hotelService.readById(codigo!).subscribe((hotel: Hotel) =>{
        this.hotel = hotel
      })
    }

    updateHotel(): void {
      this.hotelService.update(this.hotel).subscribe(() =>{
        this.hotelService.showMessage('Hotel atualizado com sucesso!')
        this.router.navigate(['/hoteis'])
      })
    }
  
    cancel(): void {
      this.router.navigate(['/hoteis'])
    }

}
