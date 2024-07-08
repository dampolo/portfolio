import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolio = [
    {
      id: 0,
      image: "assets/img/join.png",
      project_name: 'Join',
      language: 'Java Script | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      test: 'Live test',
      git_hub: 'GitHub'
    },
    {
      id: 1,
      image: 'assets/img/pollo-loco.png',
      project_name: 'Polo loco',
      language: 'Java Script | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      test: 'Live test',
      git_hub: 'GitHub'
    },
    {
      id: 2,
      image: 'assets/img/pokemon.png',
      project_name: 'Pokemons',
      language: 'JavaScript | HTML | CSS | Bootstrap | API',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information..',
      test: 'Live test',
      git_hub: 'GitHub'
    },
    {
      id: 3,
      image: 'assets/img/simple-crm.png',
      project_name: 'Simple CRM',
      language: 'Angular | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      test: 'Live test',
      git_hub: 'GitHub'
    },
  ]
}
