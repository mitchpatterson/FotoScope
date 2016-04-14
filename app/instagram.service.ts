import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class InstagramService {
	constructor(private http: Http) { }

	private _url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=955f6358796b490faa8f90b4d8361d51&format=json';
	private _key = '';
	private _link = {};

	getLocation() {
		let url = `${this._url}`;
		return this.http.get(url, )
			.map(res => res.json());
	}

}