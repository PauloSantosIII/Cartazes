import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PagesComponent } from './pages.component'
import { BarRatingModule } from 'ngx-bar-rating'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ContentComponent } from './components/body/content.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    BarRatingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [PagesComponent],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PagesComponent
  ]
})
export class PagesModule { }
