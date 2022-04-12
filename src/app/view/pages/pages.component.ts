import { CriptografiaService } from './../../core/services/criptografia.service';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  
  constructor(
    private c: CriptografiaService
  ) { }

  ngOnInit() {
    this.c.encriptar('7d1798ae')
  }

}
