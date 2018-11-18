import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/filter';

/**
 * @export
 * @class MunicipalityService
 */
@Injectable()
export class MunicipalityService{

    private urlMunicipality = "https://geo.api.gouv.fr/communes/";
    private urlCountry = "app/ressources/pays.json";

    /**
     * Creates an instance of MunicipalityService.
     * @param {HttpClient} http
     * @memberof MunicipalityService
     */
    constructor(private _http: Http){
    }

    /**
     * Function that returns the country 
     * @returns {Observable<any>}
     * @memberof CommuneService
     */
    getCountry(): Observable<any> {
        return this._http.get(this.urlCountry).map(res => res.json());
    }

    /**
     * Function that returns the municipality 
     * @param {string} numMun
     * @returns {Observable<any>}
     * @memberof MunicipalityService
     */
    getMunicipality(numMun: number) : Observable<any> {
        return this._http.get(this.urlMunicipality + numMun).map(res => res.json());
    }
}