import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { CarDetailDtoResponseModel } from '../models/carDetailDtoResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = "https://localhost:44337/api/cars/getall"
  detailApiUrl = "https://localhost:44337/api/cars/getdetailall"

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }

  getCarDetailDtos():Observable<CarDetailDtoResponseModel>{
    return this.httpClient.get<CarDetailDtoResponseModel>(this.detailApiUrl)
  }
}
