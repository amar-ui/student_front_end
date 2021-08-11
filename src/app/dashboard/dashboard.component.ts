import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public id: any;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("asasasa")
    this.id = this.router.snapshot.paramMap.get('id')
    console.log(this.id)
  }

}
