import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CsvuploadService {

  constructor(public router: Router, public http:HttpClient) { }

}
