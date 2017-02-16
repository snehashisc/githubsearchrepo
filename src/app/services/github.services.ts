import {Injectable} from '@angular/core';
import {Http, Headers} from  '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 

export class GithubService {

private username= 'snehashisc';
private client_id= 'c1d6b0415a995aa81709';
private client_secret= 'd7ffb58563174520695d804480613591000c2a02';


constructor(private _http: Http) {
console.log('Github Service Started!');
}

getUser() {
return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
.map(res => res.json());
}


getRepos() {
return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
.map(res => res.json());
}


updateUsername(username: any) {
this.username = username;
}

}