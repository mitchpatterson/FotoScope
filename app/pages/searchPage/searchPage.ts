import {Page, NavController} from 'ionic-angular';
import {InstagramService} from '../../instagram.service';
import {FotoList} from '../fotoList/fotolist';


@Page({
	templateUrl: 'build/pages/searchPage/searchPage.html',
})
export class SearchPage {
	data: any[];
	input: string;

	private _timeout;

	constructor(private _instagramService: InstagramService,
				private _nav: NavController) {}

	getLocation(input) {
		this._instagramService.getLocation(input)
			.subscribe(data => {
				this.data = data.places.place.map(function(obj){
					return obj;
				})
			});
	}

	change(input) {
		this.data = [];
		this.input = input;
		clearTimeout(this._timeout);
		this._timeout = setTimeout(this.getLocation.bind(this, input), 1000);
	}

	select(id) {
		this._nav.push(FotoList, { id: id });
	}

}
