import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { BallsComponent } from './balls/balls.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent, BallsComponent, TranslateModule],
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
      description: 'MY_PROJECTS.PROJECTS_1',
      test: 'Live test',
      test_link: 'https://join.damianpoloczek.com/',
      git_hub: 'GitHub',
      link_git_hub: 'https://github.com/dampolo/join'
    },
    {
      id: 1,
      image: 'assets/img/pollo-loco.png',
      project_name: 'El Pollo loco',
      language: 'Java Script | HTML | CSS',
      description: 'MY_PROJECTS.PROJECTS_2',
      test: 'Live test',
      test_link: 'https://elpolloloco.damianpoloczek.com/',
      git_hub: 'GitHub',
      link_git_hub: 'https://github.com/dampolo/ElPolloLoco'
    },
    {
      id: 2,
      image: 'assets/img/pokemon.png',
      project_name: 'Pokemons',
      language: 'JavaScript | HTML | CSS | Bootstrap | API',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information..',
      test: 'Live test',
      test_link: 'https://pokemons.damianpoloczek.com/',
      git_hub: 'GitHub',
      link_git_hub: 'https://github.com/dampolo/PokeApi'
    },
    {
      id: 3,
      image: 'assets/img/simple-crm.png',
      project_name: 'Simple CRM',
      language: 'Angular | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      test: 'Live test',
      test_link: 'https://github.com/dampolo/ElPolloLoco',
      git_hub: 'GitHub',
      link_git_hub: 'https://github.com/dampolo/ElPolloLoco'
    },
  ]
}
