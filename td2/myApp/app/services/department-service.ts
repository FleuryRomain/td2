import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

/**
 * @export
 * @class DepartmentService
 */
@Injectable()
export class DepartmentService{

    private url = "https://geo.api.gouv.fr/departements/";

    /**
     * Creates an instance of DepartmentService.
     * 
     * @param {HttpClient} http
     * @memberof DepartmentService
     */
    constructor(private _http: Http){
    }

    /**
     * Function that returns the department number
     * 
     * @param {number} numDepartment
     * @returns {Observable<any>}
     * @memberof DepartmentService
     */
    getDepartment(numDepartment: number): Observable<any> {
        return this._http.get(this.url + numDepartment).map(res => res.json());
    }
}