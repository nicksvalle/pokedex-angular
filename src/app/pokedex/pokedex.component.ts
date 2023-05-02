import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../pokedex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokedex : Pokedex = {} as Pokedex;

  ngOnInit(): void {
    this.pokedex.front_default = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  }

}
