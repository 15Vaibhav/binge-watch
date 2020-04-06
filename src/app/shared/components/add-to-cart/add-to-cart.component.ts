/**
 * core module
 */
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/cart';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  public alreadyExist = false
  
  constructor(public dialogRef: MatDialogRef<AddToCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private movieService: MovieService) {}

  ngOnInit() {
  }


  saveToCart(movie,genre) {
    const movieObject = new Movie();
    movieObject.title = movie.movie.title || movie.movie.name 
    movieObject.poster_path = movie.movie.poster_path || movie.movie.profile_path
    movieObject.genere = genre;
    this.movieService.addToCart(movieObject).subscribe(() => {this.dialogRef.close()},err =>{
      if(err.status==206){
        this.alreadyExist = true;
      }
    })
  }
}
