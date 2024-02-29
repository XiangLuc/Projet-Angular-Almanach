import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="bg-dark position-fixed w-100 h-100 d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h1 class="text-danger display-1 animate__animated animate__fadeInUp">
        You Died
      </h1>
      <p class="text-white lead mb-5">Erreur 404 : La page n'existe pas.</p>
      <a routerLink="/accueil" class="btn btn-danger">
        Retourner à l'accueil
      </a>
    </div>
  </div>
  `
})
export class PageNotFoundComponent {

}
