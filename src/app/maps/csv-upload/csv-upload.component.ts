import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent implements OnInit {
  selectedFile: File = null;
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
  fileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log("upload data is: ",this.selectedFile);
  }
  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    console.log("upload data is: ",fd);
    // this.http.post('https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile',fd,({
    //   reportProgress:true,
    //   observe:'events'
    // }))
    // .subscribe(event=>{ 
    //     if(event.type=== HttpEventType.UploadProgress){
    //       console.log(Math.round(event.loaded / event.total * 100) + '%');
    //     } else if (event.type === HttpEventType.Response){
    //         console.log(event);
    //     }
    // });
  }
}
