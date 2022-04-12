import { CriptografiaService } from './criptografia.service'
import { environment } from 'src/environments/environment.prod'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  apiKey: string = ''
  apiUrl: string = environment.apiUrl
  apiUrlShort: string = environment.apiUrlShort

  constructor(
    private crypto: CriptografiaService,
    private http: HttpClient
  ) {}

  searchListFilms(title: string): Observable<any> {
    return this.http.get<Observable<any>>(
      this.apiUrl + this.apiKey + '&s=' + title
    )
  }

  searchFilm(title: string): Observable<any> {
    const key = localStorage.getItem('CHAVE')
    this.apiKey = this.crypto.descriptar(''+key)
    
    return this.http.get<any>(      
      this.apiUrlShort + title + '&apikey=' + this.apiKey
    )
  }
}
