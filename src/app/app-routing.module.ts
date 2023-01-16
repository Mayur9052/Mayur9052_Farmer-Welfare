import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimateComponent } from './components/climate/climate.component';
import { CropContentComponent } from './components/Crops/crop-content/crop-content.component';
import { KharifComponent } from './components/Crops/kharif/kharif.component';
import { RabiComponent } from './components/Crops/rabi/rabi.component';
import { ZaidComponent } from './components/Crops/zaid/zaid.component';
import { HomeComponent } from './components/Home/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { TestingComponent } from './components/testing/testing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Crops_details/:name', component: CropContentComponent },
  { path: 'crops_details/Rabi', component: RabiComponent },
  { path: 'crops_details/Kharif', component: KharifComponent },
  { path: 'crops_details/Zaid', component: ZaidComponent },
  { path: 'Crops_details', component: CropContentComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Testing', component: TestingComponent },
  { path: 'Climate', component: ClimateComponent },
  { path: 'News', component: NewsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
