import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/Home/navbar/navbar.component';
import { FooterComponent } from './components/Home/footer/footer.component';
import { BackgroundImageComponent } from './components/Home/background-image/background-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CropsTypeComponent } from './components/Home/crops-type/crops-type.component';
import { CropContentComponent } from './components/Crops/crop-content/crop-content.component';
import { ProductTypeComponent } from './components/Home/product-type/product-type.component';
import { StarRatingComponent } from 'ng-starrating/public-api';
import { TestingComponent } from './components/testing/testing.component';
import { ProductComponent } from './components/product/product.component';
import { MatSelectModule } from '@angular/material/select';
import { ClimateComponent } from './components/climate/climate.component';
import { NewsComponent } from './components/news/news.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { CropsService } from './services/crops-service.service';
import { ProductSidebarComponent } from './components/product/product-sidebar/product-sidebar.component';
import { ProductContentComponent } from './components/product/product-content/product-content.component';
import { RabiComponent } from './components/Crops/rabi/rabi.component';
import { KharifComponent } from './components/Crops/kharif/kharif.component';
import { ZaidComponent } from './components/Crops/zaid/zaid.component';
import { RabiLinksComponent } from './components/Crops/rabi-links/rabi-links.component';
import { KharifLinksComponent } from './components/Crops/kharif-links/kharif-links.component';
import { ZaidLinksComponent } from './components/Crops/zaid-links/zaid-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    BackgroundImageComponent,
    CropsTypeComponent,
    CropContentComponent,
    ProductTypeComponent,
    TestingComponent,
    ProductComponent,
    ClimateComponent,
    NewsComponent,
    ProductSidebarComponent,
    ProductContentComponent,
    RabiComponent,
    KharifComponent,
    ZaidComponent,
    RabiLinksComponent,
    KharifLinksComponent,
    ZaidLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
