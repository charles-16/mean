import { Component, OnInit, Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  Project: string;
  dataFile: string;
  inputData: any;
  text  : any ;
  JSONData1: any;
  JSONData : any;
  projectName : any;
  Department: string;
  CurrentStage: string;
  radio1: string;
  Keywords: string;
  description: string;
  contact: string;
 contactEmail: string;
  reviewer: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructJson: any;
  contructMail: any;
  isShown: boolean=false;
  model: string;
  New_model: boolean;
  pid: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
//this.OnSubmit();

  }

  
  
  csvJSON(csvText) {
    var lines = csvText.split("\n");
 
    var result = [];
 
    var headers = lines[0].split(",");
    console.log(headers);
    for (var i = 1; i < lines.length-1; i++) {
 
        var obj = {};
        var currentline = lines[i].split(",");
 
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
 
        result.push(obj);
 
    }
 
console.log(JSON.stringify(result));
this.JSONData = JSON.parse(JSON.stringify(result));
    console.log(this.JSONData)
   

    
//    this.http.post("http://localhost:8000/create",this.JSONData,{ headers : headers});
/* this.http.post<any>('http://localhost:8000/create',this.JSONData, {headers: headers}).subscribe(data => {
   // this.postId = data.id;
   console.log(data);
   console.log(data)
}) */

/* this.http.post<any>('https://jsonplaceholder.typicode.com/posts',this.JSONData).subscribe(data => {
   // this.postId = data.id;
   console.log(data);
}) */
    
    /* this.http.get("http://localhost:8000/apis").subscribe((data: any[])=>{
      console.log(data)
  }) */
 }
 /* onsubnit(){
console.log(this.radio1);
 } */
 
Onsubmit()
{
  if (this.model == "1" )
  {
    this.New_model=true;
  }
  else{
    this.New_model=false;
  }
 // console.log(this.JSONData);
  console.log(this.contactEmail)
  let date: Date = new Date();  
  this.constructJson={
    "current_step":this.CurrentStage,
    "new_model": this.New_model,
    "keywords": this.Keywords,
    "department":this.Department,
    "cuurent_step":1,
    "activities":{
        "actor":"guru",
        "step":"Project Creation",
        "activity":"send notification to "+this.contact+"("+this.contactEmail+")",
        "modified": date
              },
      "legal_reviewer_email":"123@gmail.com",
      "legal_reviewer":this.reviewer,
      "contact_email":this.contactEmail,
      "contact": this.contact,
      "description":this.description,
      "name":this.Project,
      "Data":this.JSONData
            }
  this.isShown=true;
console.log(this.constructJson)
 this.http.post<any>('http://localhost:8000/create',this.constructJson, {headers: this.headers}).subscribe(data => {
   // this.postId = data.id;
   console.log(data);
   console.log(data._id);
   this.pid=data._id;
   this.contructMail={
     "sender_id":this.contactEmail,
       "url" :'http://localhost:4200/relatedProject?id='+data._id,
       "name":this.contact,
       "project":this.Project
  }
  console.log(this.contructMail)
  this.http.post<any>('http://localhost:8000/email',this.contructMail, {headers: this.headers}).subscribe(data => {
    // this.postId = data.id;
    console.log(data);
})

}) 
}

  
  onSelectFile(input: any) {

    const reader = new FileReader();
    reader.readAsText(input.target.files[0]);
    reader.onload = () => {
      let text = reader.result;
      this.text = text;
      console.log("csvfile");
      //console.log(text);
      this.csvJSON(text);
    };
   
   }
   
   OnActivity()
   {
     //console.log(777)
    this.http.get('http://localhost:8000/fetchdata/'+this.pid).subscribe(data => {
      console.log('activity');
      console.log(data["activities"])    
      console.log(data);})
          

   }


}
