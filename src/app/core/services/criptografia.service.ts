import { environment } from 'src/environments/environment'
import { Injectable } from '@angular/core'
import * as Crypto from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class CriptografiaService {

  constructor() { }

  encriptar(content: string): any {
    if (content !== null && content !== undefined && content !== ''){
      const textEncrypted = Crypto.AES.encrypt(content, environment.apiKey).toString()
      
      return textEncrypted
    } else {
      return null
    }
  }

  descriptar(textEncrypted: string): string {
    if (textEncrypted !== null && textEncrypted !== undefined && textEncrypted !== '') {
      const bytes  = Crypto.AES.decrypt(textEncrypted, environment.apiKey)
      
      return bytes.toString(Crypto.enc.Utf8)
    } else {
      return ''
    }
  }
}
