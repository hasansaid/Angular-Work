import { RandomImageService } from './../../service/random-image-project/random-image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-image-project',
  templateUrl: './random-image-project.component.html',
  styleUrls: ['./random-image-project.component.css'],
})
export class RandomImageProjectComponent implements OnInit {
  content =
    "Added service layer and HttpClient module. So data can be retrieved from api. Pictures come from api. Don't forget to review the codes (: ";
  imageUrl: string = '';
  constructor(private imageService: RandomImageService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imageService.getImages().subscribe((response) => {
      this.imageUrl = response.urls.regular;
      // console.log(this.imageUrl);
    });
  }

  onClick() {
    this.getImages();
  }
}
