import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http : HttpClient) { }
  private apiUrl = "https://jsonplaceholder.typicode.com/photos";

  loadGallery() {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => data) // Corrected map syntax
    );
  }
}
