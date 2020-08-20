import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Material } from 'src/app/models/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Materiales: Material[];
  dataSource = new MatTableDataSource<Material>();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: any[] = [
    'name',
    'unit',
    'price',
    'stock',
    'total',
    'action',
    'action2'
  ];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getList();
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getList() {
    this.apiService.readMateriales().subscribe((materiales: Material[]) => {
      this.Materiales = materiales;
      if (this.Materiales.length > 0) {
        this.dataSource.data = this.Materiales.slice();
      }
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  deleteMaterial(material: Material) {
    this.apiService.deleteMaterial(material.id.toString()).subscribe(
      data => {
        this.getList();
      }, (err) => {
        console.log(err);
      }
    );
  }
}
