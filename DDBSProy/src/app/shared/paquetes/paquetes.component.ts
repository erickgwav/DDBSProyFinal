import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit{
  
  paquetes: any[] = [];

  servicios: any[] = [];

  datas: any[] = [];

  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.dataService.getPaquetes().subscribe(data => this.paquetes = data);
    this.dataService.getServicios().subscribe(data => this.servicios = data);
    this.dataService.getData().subscribe(data => this.datas = data);

    throw new Error('Method not implemented.');
  }

}
