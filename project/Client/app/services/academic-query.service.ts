import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http'

@Injectable()
export class AcademicQueryService {

  private url: string;

  constructor(private http: Http) {
    this.url = "";
  }

}    
