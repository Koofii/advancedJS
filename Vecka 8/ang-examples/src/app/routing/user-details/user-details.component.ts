import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  details;

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(
    //     params => {
    //       const userId = params.get('id');

    //       this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //         .subscribe(
    //           response => this.details = response.json()
    //         )
    //     }
    //   )

    this.route.paramMap
      .switchMap(params => {
        const userId = params.get('id');

        return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      })
      .subscribe(
        response => this.details = response.json()
      )
  }

}
