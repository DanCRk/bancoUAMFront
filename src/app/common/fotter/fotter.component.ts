import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private router: Router){
    
  }

  navegar(url:string){
    this.router.navigateByUrl(url)
  }

}
