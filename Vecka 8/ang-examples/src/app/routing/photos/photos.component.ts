import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos;

  constructor(private route: ActivatedRoute, private http: Http) { }
  

  ngOnInit() {

    this.route.queryParamMap
      .subscribe(
        params => {
          console.log(params)
          const limit = params.get('limit') || 10;

          this.http.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
            .subscribe(
              response => {
              this.photos = response.json();
              console.log(this.photos)
              }
            )

        }
      )
  }

}
