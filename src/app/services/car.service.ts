import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44307/api/"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let path = this.apiUrl+"cars/getalldetails"
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarDetailsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getdetailbybrandid?brandId=${brandId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getCarDetailByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getdetailbycolorid?colorId=${colorId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getCarDetailByCarId(carId: number): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getdetailbycarid?carId=${carId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
}