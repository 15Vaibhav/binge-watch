/**
 * core module
 */
import { Component, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

/**
 * application modules components and constatnts
 */
import { AddToCartComponent } from '../../../shared/components/add-to-cart/add-to-cart.component'
import { Movies } from "../../models/movies";
import { MovieService } from "src/app/services/movie.service";


@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {

  public movies: Movies[];
  public moviePoster = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  myControl = new FormControl();

  constructor(private moviesService: MovieService, public dialog: MatDialog) {}

  ngOnInit() {
    this.moviesService.getMoviesList().subscribe(movies => {
      this.movies = movies['results']
    });
  
    this.myControl.valueChanges.subscribe(res=>{
      if(res.length>3){
        this.moviesService.serachMovie(res).subscribe(movies=>{
          this.movies = movies['results']
        })
      }
    })

  }

  openMovieDialog(element) {
    this.dialog.open(AddToCartComponent, {
      data: {movie:element}
    });

  }
}
