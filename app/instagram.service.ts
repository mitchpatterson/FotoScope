import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class InstagramService {
	constructor(private http: Http) { }

	private _key = '';
	private _link = {};

	getLocation(query) {
		let url = `https://api.flickr.com/services/rest/?api_key=955f6358796b490faa8f90b4d8361d51&format=json&nojsoncallback=?&query=${query}&method=flickr.places.find`;
		return this.http.get(url)
			.map(res => res.json());
	}

	getLocationId(id) {
		let url = `https://api.flickr.com/services/rest/?api_key=955f6358796b490faa8f90b4d8361d51&format=json&nojsoncallback=?&sort=interestingness-desc&content_type=1&place_id=${id}&geo_content=2&per_page=20&method=flickr.photos.search`;
		return this.http.get(url)
			.map(res => res.json());
	}

	// returnFoto(farmId, serverId, photoId, secret) {
	// 	let url = `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}.jpg`;
	// 	return this.http.get(url)
	// 		.map(res => res.json());
	// }

}