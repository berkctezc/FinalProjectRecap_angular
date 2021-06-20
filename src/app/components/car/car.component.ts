import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CartService } from 'src/app/services/cart.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/image';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {

  cars: CarDetail[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private cardetailService: CardetailService,
    private toastrService: ToastrService
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarDetailsByBrand(params["brandId"])
      } else if (params["colorId"]) {
        this.getCarDetailsByColor(params["colorId"]);
      } else {
        this.getCarDetails();
      }
    })
  }

  getCarDetails() {
    this.cardetailService.getCarDetails().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByColor(colorId: number) {
    this.cardetailService.getCarDetailByColor(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByBrand(brandId: number) {
    this.cardetailService.getCarDetailsByBrand(brandId).subscribe(response => {
      this.cars = response.data;
      console.log(response)
      this.dataLoaded = true;
    })
  }

  path = "https://localhost:44307/uploads/";

  SetImage(car: CarDetail) {
    if (car.imagePath.length > 0) {
      return `${this.path}${car.imagePath}`;
    } else {
      return `${this.path}logo.jpg`;
    }
  }

  addToCart(car: CarDetail) {
    if (car.id === 3) {
      this.toastrService.error(car.description, "Error")
    } else {
      this.toastrService.success(car.description, "Added")
      this.cartService.addToCart(car);
    }
  }
}