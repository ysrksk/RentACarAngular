import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[] = [];
  rentalDetailDtos:RentalDetailDto[] = [];
  dataLoaded = false;

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
    this.getRentalDetailDtos();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=> {
      this.rentals = response.data;
      this.dataLoaded = true;
    })
  }

  getRentalDetailDtos(){
    this.rentalService.getRentalDetailDtos().subscribe(response=>{
      this.rentalDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }

}
