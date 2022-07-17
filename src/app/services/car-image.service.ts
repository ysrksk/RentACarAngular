import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarImageResponseModel } from '../models/carImageResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = "https://localhost:44398/api/products/getall"

  getCarImages():Observable<CarImageResponseModel>{
    return this.httpClient.get<CarImageResponseModel>(this.apiUrl)
  }
}
