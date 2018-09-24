import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createNewServer ='no server was created !';
  serverName='ini two way binding';
  statusServer = false;
  servers =['testServer','TestServer2']
    constructor() {
    setTimeout(() => {
      this.allowNewServer = true 
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.statusServer= true;
    this.servers.push(this.serverName);
    this.createNewServer = 'server has created! the name is ' + this.serverName; //combining all forms of databinding
  }
                //event: any kalo mau liat value di log 
  onUpdateServer(event:Event){
    console.log();
    this.serverName = (<HTMLInputElement>event.target).value; //di cast dulu kalo mau ambil data dri html
  }

}
