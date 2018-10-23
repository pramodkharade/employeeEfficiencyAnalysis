import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent implements OnInit {
  selectedFile: File = null;
  uploadStatus: any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
  fileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log("upload data is: ", this.selectedFile);
  }
  onUpload() {
    const fd = new FormData();
    let headers = new HttpHeaders();
    fd.append('excelTemplate', this.selectedFile, this.selectedFile.name);
    headers.append('Content-Type', 'multipart/form-data');
    this.http.post(environment.api + '/template/fileUpload?userId=' + localStorage.getItem('userID'), fd, ({
      reportProgress: true,
      observe: 'events',
      headers
    }))
      .subscribe(event => {
        console.log('Obj:',event);
        if (event.type === HttpEventType.UploadProgress) {
          //console.log('Obj:', HttpEventType);
          //this.uploadStatus = Math.round(event.loaded / event.total * 100);
          //console.log(Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
            if(HttpEventType.Response==4){
              this.uploadStatus ='CSV Uploaded Successfully!';
            }
        }
      });
  }
}
