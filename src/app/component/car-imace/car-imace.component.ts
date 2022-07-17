import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-imace',
  templateUrl: './car-imace.component.html',
  styleUrls: ['./car-imace.component.css']
})
export class CarImaceComponent implements OnInit {

  carImages:CarImage[] = [];
  dataLoaded = false;

  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.getCarImages
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
      this.carImages = response.data;
      this.dataLoaded = true;
    })
  }

}
