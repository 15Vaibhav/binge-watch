/**
 * core module
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * application modules components and constatnts
 */
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) { }

  getMoviesList() {
   return this.http.get(`${environment.apiUrl}/movie/popular?api_key=aa663930fc097de244238356b50a7bc7`);
  }

  serachMovie(movie) {
    return this.http.get(`${environment.apiUrl}/search/multi?api_key=aa663930fc097de244238356b50a7bc7&language=en-US&query=${movie}&include_adult=false`);
     }
}
