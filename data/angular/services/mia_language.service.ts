import { Injectable } from '@angular/core';
import { MiaLanguage } from '../entities/mia_language';
import { MiaBaseCrudHttpService } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiaLanguageService extends MiaBaseCrudHttpService<MiaLanguage> {

  constructor(
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = environment.baseUrl + 'mia_language';
  }
 
}