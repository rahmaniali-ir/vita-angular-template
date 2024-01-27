import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AnimateDirective } from './directives/animate.directive';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { VisionComponent } from './pages/vision/vision.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimateDirective,
    SolutionsComponent,
    VisionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
