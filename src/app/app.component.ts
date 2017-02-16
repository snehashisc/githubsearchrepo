import { Component } from '@angular/core';
import { GithubComponent } from './components/github.component';
import { GithubService } from './services/github.services';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers: [HTTP_PROVIDERS, GithubService]
})

export class AppComponent  {  }
