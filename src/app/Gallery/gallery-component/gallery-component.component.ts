import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GalleryService } from '../gallery.service';
import { retrievedGallery } from '../gallery.action';
import { GalleryModel } from '../gallery.model';
import { uniqueAlbumIds } from '../gallery.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.component.html',
  styleUrl: './gallery-component.component.css'
})
export class GalleryComponentComponent implements OnInit{
  
  albumId$ = this.store.pipe(select(uniqueAlbumIds));
  // gallery: Observable<GalleryModel[]> | undefined; // Define gallery property

  constructor(private store : Store<{gallery : GalleryModel[]}>,private galleryservice : GalleryService){}

  ngOnInit(): void {
     this.galleryservice.loadGallery().subscribe((data)=>
     {
      this.store.dispatch(retrievedGallery({allGallery :data as GalleryModel[] }));
      // this.gallery = this.store.pipe(select('gallery'));
     })
  }
}
