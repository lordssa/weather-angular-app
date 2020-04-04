import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.sass']
})
export class SettingComponent implements OnInit {

  city: string; 

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  save() {
    let location = {
      city: this.city    
    }

    localStorage.setItem('location', JSON.stringify(location));
    this.route.navigate(['home']);
  }
}
