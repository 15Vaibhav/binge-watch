/**
 * core module
 */
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public movies: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getData()
  }

  wathced(movie) {
    movie.watched = !movie.watched;
    this.movieService.watchedStatus(movie).subscribe((result)=>{
      window.alert('done')
    },err=>{
      console.log(err)
    })
  }

  private getData() {
    this.movieService.getCartItem().subscribe(res =>{
      this.movies = <Movies>res;
    },err =>{
      console.log(err);
    })
  }
}
