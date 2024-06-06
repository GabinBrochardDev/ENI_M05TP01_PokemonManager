import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  height: string;
  weight: string;
  generation: number;
}


@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit {

  generationId: number = 0; // Initialiser avec une valeur par défaut
  pokemons: Pokemon[] = [
    // Génération I
    { id: 1, name: 'Bulbizarre', type: 'plante et poison', height: '0,7', weight: '6,9', generation: 1 },
    { id: 2, name: 'Herbizarre', type: 'plante et poison', height: '1', weight: '13', generation: 1 },
    { id: 3, name: 'Florizarre', type: 'plante et poison', height: '2', weight: '100', generation: 1 },

    // Génération II
    { id: 7, name: 'Germignon', type: 'plante', height: '0,9', weight: '6,4', generation: 2 },
    { id: 8, name: 'Macronium', type: 'plante', height: '1,2', weight: '15,8', generation: 2 },
    { id: 9, name: 'Méganium', type: 'plante', height: '1,8', weight: '100,5', generation: 2 },

    // Génération III
    { id: 13, name: 'Arcko', type: 'plante', height: '0,5', weight: '5', generation: 3 },
    { id: 14, name: 'Massko', type: 'plante', height: '0,9', weight: '21,6', generation: 3 },
    { id: 15, name: 'Jungko', type: 'plante', height: '1,7', weight: '52,2', generation: 3 },

    // Génération IV
    { id: 19, name: 'Tortipouss', type: 'plante', height: '0,4', weight: '10,2', generation: 4 },
    { id: 20, name: 'Boskara', type: 'plante', height: '1,1', weight: '97', generation: 4 },
    { id: 21, name: 'Torterra', type: 'plante et sol', height: '2,2', weight: '310', generation: 4 },

    // Génération V
    { id: 25, name: 'Vipélierre', type: 'plante', height: '0,6', weight: '8,1', generation: 5 },
    { id: 26, name: 'Lianaja', type: 'plante', height: '0,8', weight: '16', generation: 5 },
    { id: 27, name: 'Majaspic', type: 'plante', height: '3,3', weight: '63', generation: 5 },

    // Génération VI
    { id: 31, name: 'Marisson', type: 'plante', height: '0,4', weight: '9', generation: 6 },
    { id: 32, name: 'Boguérisse', type: 'plante', height: '0,7', weight: '29', generation: 6 },
    { id: 33, name: 'Blindépique', type: 'plante et combat', height: '1,6', weight: '90', generation: 6 },

    // Génération VII
    { id: 37, name: 'Brindibou', type: 'plante et vol', height: '0,3', weight: '1,5', generation: 7 },
    { id: 38, name: 'Efflèche', type: 'plante et vol', height: '0,7', weight: '16', generation: 7 },
    { id: 39, name: 'Archéduc', type: 'plante et spectre', height: '1,6', weight: '36,6', generation: 7 },

  ];

  generationPokemons: Pokemon[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.generationId = +params['id'];
      this.filterPokemonsByGeneration(this.generationId);
    });
  }

  filterPokemonsByGeneration(generationId: number): void {
    this.generationPokemons = this.pokemons.filter(p => p.generation === generationId);
  }

}
