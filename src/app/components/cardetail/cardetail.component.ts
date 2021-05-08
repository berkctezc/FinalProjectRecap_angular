import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { Image } from 'src/app/models/image';
import { CardetailService } from 'src/app/services/cardetail.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails: CarDetail[] = []
  images: Image[] = []
  dataLoaded = false;

  constructor(
    private cardetailService:CardetailService,
    private imageService:ImageService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]){
        this.getCarDetailByCarId(params["carId"])
        this.getImagesByCarId();
      }
    })
  }

  getCarDetailByCarId(carId:number){
    this.cardetailService.getCarDetailByCarId(carId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }

  getImagesByCarId() {
    this.imageService.getImagesByCarId(this.activatedRoute.snapshot.params["carId"]).subscribe(response => {
      this.images = response.data;
    })
  }


}
