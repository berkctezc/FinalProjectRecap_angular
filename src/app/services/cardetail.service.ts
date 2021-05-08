import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44307/api/";

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getalldetails`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path)
  }

  getCarDetailsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getdetailbybrandid?brandId=${brandId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getCarDetailsByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getdetailbycolorid?colorId=${colorId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getCarDetailByCarId(carId: number): Observable<ListResponseModel<CarDetail>> {
    let path = `${this.apiUrl}cars/getdetailsbyid?Id=${carId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
} 