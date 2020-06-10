import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';




@Component({
  selector: 'app-detect-bias',
  templateUrl: './detect-bias.component.html',
  styleUrls: ['./detect-bias.component.css']
})
export class DetectBiasComponent implements OnInit {
  ProjectId : string;
  jsonData:any;
  Isarr: boolean ;
  statdata: any[]
  ValueData: any
  pid:any;
  aributteValue:any[] =[]
  aributtes=[]
  cities2 = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
    {id: 6, name: 'Klai'}
];
selectedCityIds: string[];
headers = new HttpHeaders().set('Content-Type', 'application/json');
addCustomUser: string;
Headerdata:any[]
selectedUserIds: any[];
  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient) 
  {
    
   }

  ngOnInit() {
   // this.Isarr=true;
   console.log("working")
   this.activatedRoute.queryParams.subscribe(params => {
    this.ProjectId = params['id'];
    console.log(this.ProjectId)
  });
  if (this.ProjectId == null){
console.log("hhh");
  }
else{
  
this.getData(this.ProjectId);
}
}
getData(id:any)
{
  
    let params = new  HttpParams().set('id', id);
    
  this.http.get('http://localhost:8000/fetchdata/'+id).subscribe(data => {
console.log(1);
    console.log(data);
    console.log(2);
    console.log(data["Data"])
    
    this.statdata=data["Data"]
    console.log(this.statdata.length)
    
    for (var i = 0; i < this.statdata.length; i++) 
    {
      this.aributteValue[i]= this.statdata[i]["Data_value"]
    }
    this.ValueData=this.aributteValue
    console.log(this.aributteValue);
    this.Headerdata=Object.keys(this.statdata[0])
    console.log(Object.keys(this.statdata[0]))

  })
}
updateattribute(event : any)
{
  console.log(event)
  this.selectedUserIds=event
  console.log('working');
if (this.selectedUserIds.length != 0)
{
  for(var i = 0; i < this.selectedUserIds.length; i++)
  {
    this.aributtes[i]=this.selectedUserIds[i];
  }
}
this.aributtes=this.selectedUserIds
}



Onsubmit(){

}

}
