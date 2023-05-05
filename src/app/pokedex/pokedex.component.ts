import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokedex, Results } from '../pokedex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokedex: { results: Results[] } = { results: [] };

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.loadPokedex();
  }

  loadPokedex() {
    this.pokedexService.getPokedex().subscribe(
      (data: Pokedex) => {
        this.pokedex = data;
      }
    );
  }
}
