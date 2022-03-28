import { Component, AfterViewInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  config = {
    searchClient: algoliasearch('DCB5PECD67', '5d296a8d2af67eba109da732247efcdc'),
    indexName: 'themes',
    routing: true,
  };
  resultsContainer = undefined;
  header = undefined;

  onKeyUp = event => {
    if (event.key !== 'Escape') {
      return;
    }
    this.closeFilters();
  };

  onClick = event => {
    if (event.target !== this.header) {
      return;
    }
    this.closeFilters();
  };

  ngAfterViewInit() {
    this.resultsContainer = document.querySelector('.container-results');
    this.header = document.querySelector('#header');
  }

  public openFilters() {
    document.body.classList.add('filtering');
    window.scrollTo(0, 0);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('click', this.onClick);
  }

  public closeFilters() {
    document.body.classList.remove('filtering');
    this.resultsContainer.scrollIntoView();
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('click', this.onClick);
  }
}
