import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { RentalDetailDtoResponseModel } from '../models/rentalDetailDtoResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://localhost:44398/api/products/getall"

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl)
  }

  getRentalDetailDtos():Observable<RentalDetailDtoResponseModel>{
    return this.httpClient.get<RentalDetailDtoResponseModel>(this.apiUrl)
  }
}
