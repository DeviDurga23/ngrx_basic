import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer/reducer';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import{productReducer} from './reducer/product.reducer';
import { UsersComponent } from './users/users.component'
import { HttpClientModule } from '@angular/common/http';
import { userReducer } from './user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/user.effects';
import { galleryReducer } from './Gallery/gallery.reducer';
import { GalleryService } from './Gallery/gallery.service';
import { GalleryComponentComponent } from './Gallery/gallery-component/gallery-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavComponent,
    ProductComponent,
    UsersComponent,
    GalleryComponentComponent
  ],
  imports: [                       
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({count : counterReducer,
      products : productReducer,
      UserState : userReducer,
      gallery :galleryReducer }) ,//we can give any name in place count here
      EffectsModule.forRoot([UserEffects]), 
  ],
  
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
