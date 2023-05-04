import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../pokedex';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokedex : Pokedex = {} as Pokedex;

  constructor(private service : PokedexService){}

  ngOnInit(): void {
    this.pokedex.front_default = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  }

  loadPokedex(){
    this.service.getPokedex().subscribe(
      {
        next : data => this.pokedex = data
      }
      
    );
  }
  
  getBreed(): string[] {
    const parts = this.pokedex.front_default.split('/');
    const pokemonId = parts[parts.length - 1].split('.')[0];
    return [pokemonId];
  }
}
