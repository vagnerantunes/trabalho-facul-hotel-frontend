import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel.model';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-delete',
  templateUrl: './hotel-delete.component.html',
  styleUrls: ['./hotel-delete.component.css']
})
export class HotelDeleteComponent implements OnInit {

  hotel!: Hotel;

  constructor(
    private hotelService: HotelService, 
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      const codigo = this.route.snapshot.paramMap.get('codigo');
      this.hotelService.readById(codigo!).subscribe(hotel =>{
        this.hotel = hotel
      })
    }

    deleteHotel(): void {
      this.hotelService.delete(this.hotel.codigo!).subscribe(() =>{
      this.hotelService.showMessage('Hotel excluido com sucesso!')  
      this.router.navigate(['/hoteis'])
      })
    }
  
    cancel(): void{
      this.router.navigate(['/hoteis'])
    }

}
