import { Component } from '@angular/core';
import * as L from 'leaflet';
//External File to change number of deals :
import { UK_cities, USA_cities, India_cities, Australia_cities } from './deals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deals-map';
  map :any; UK_deals:number = 0; USA_deals:number = 0;India_deals:number = 0;Australia_deals:number = 0;
  //Adding Countries Icons
  // I could have used the default Leaflet JS marker,
  //But I wanted to recreate the picture sent by mail as close as possible
  Australia = L.icon({
    iconUrl : '../assets/img/Australia_icon.png'
  })
  India = L.icon({
    iconUrl : '../assets/img/India_icon.png'
  })
  UK = L.icon({
    iconUrl : '../assets/img/UK_icon.png'
  })
  US = L.icon({
    iconUrl : '../assets/img/US_icon.png'
  })
  //Images of icons were taken from the picture sent, in order to use it for LeafletJS


  constructor(){}

  ngOnInit(): void{
    //Calculating Number of Deals for each of the countries:
    this.UK_deals = UK_cities.London + UK_cities.Liverpool + UK_cities.Leeds + UK_cities.Manchester + UK_cities.Leichester + UK_cities.Brithon_and_Hove + UK_cities.Norwich + UK_cities.Sheffield;
    this.USA_deals = USA_cities.Lancaster + USA_cities.Garden_Grove + USA_cities.Glendale + USA_cities.Worchester + USA_cities.Norfolk + USA_cities.Madison + USA_cities.Orlando;
    this.India_deals = India_cities.Mumbai + India_cities.Delhi + India_cities.Jaipur + India_cities.Surat + India_cities.Kanpur;
    this.Australia_deals = Australia_cities.Sydney + Australia_cities.Melbourne + Australia_cities.Adelaide + Australia_cities.Townsville;

    if(this.map){
      this.map.remove();
    }
    this.map = L.map('map').setView([30, 50], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    //Adding markers to the map:
    L .marker([-20.473469, 130.0124], {icon : this.Australia}).addTo(this.map);
    L .marker([28.66, 72], {icon : this.India}).addTo(this.map);
    L .marker([51.509865, -0.118092], {icon : this.UK}).addTo(this.map);
    L .marker([50, -110], {icon : this.US}).addTo(this.map);
    }

    viewReport(){
      alert(
        'UK deals:' + '\r\n' +
        JSON.stringify(UK_cities,null, 4) + '\r\n' +
        'USA deals:' + '\r\n' +
        JSON.stringify(USA_cities,null, 4)
      );

      alert(
        'India deals:' + '\r\n' +
        JSON.stringify(India_cities,null, 4) + '\r\n' +
        'Australia deals:' + '\r\n' +
        JSON.stringify(Australia_cities,null, 4)
      );
    }
  }
