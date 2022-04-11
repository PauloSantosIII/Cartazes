import { FilmeService } from 'src/app/core/services/filme.service';
import { Component, OnInit } from '@angular/core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  faStar = faStar
  filmForm: FormGroup = new FormGroup({})
  filmPoster: string = ''
  filmTitle: string = ''
  filmPlot: string = ''
  filmActors: string = ''
  filmRating: string = ''
  filmYear: string = ''
  filmRatings: string = ''
  showCard: boolean = false
  
  constructor(
    private filmService: FilmeService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.inicializarForm()
    this.filmPoster = ''
    this.filmTitle = ''
    this.filmYear = ''
    this.filmPlot = ''
    this.filmActors = ''
    this.filmRating = ''
    this.filmRatings = ''
    this.showCard = false
  }

  inicializarForm() {
    this.filmForm = this.fb.group({
      filmName: ['', Validators.required]
    })
  }

  getFilm(title: string) {
    this.filmService.searchFilm(title).subscribe((resp) => {
      this.filmPoster = resp.Poster
      this.filmTitle = resp.Title
      this.filmYear = resp.Year
      this.filmPlot = resp.Plot
      this.filmActors = resp.Actors
      this.filmRating = resp.imdbRanting
      this.filmRatings = resp.Ratings.Value
      this.showCard = true
    })
  }

  reset() {
    this.ngOnInit()
  }
}
