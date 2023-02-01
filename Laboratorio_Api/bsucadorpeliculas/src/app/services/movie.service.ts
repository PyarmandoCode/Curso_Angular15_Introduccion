import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

private API_URL:string='https://www.omdbapi.com/?i=tt38%2096198&apikey=de5cfeb1';

  constructor(private http:HttpClient) { }
  getMovies(searchTerm:string):Observable<any> {
    return this.http.get(`${this.API_URL}&s=${searchTerm}`);
    //return this.http.get(this.API_URL + '&s=' +searchTerm)
  }
}
