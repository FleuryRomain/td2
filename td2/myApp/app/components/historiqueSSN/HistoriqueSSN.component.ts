import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../models/Person";



@Component({
    selector: 'historique-ssn',
    templateUrl: 'app/components/historiqueSSN/historiqueSSN.component.html',
    styleUrls: ['app/components/historiqueSSN/historiqueSSN.component.css']
})

/**
 * @export
 * @class HistoriqueSSNComponent
 */
export default class HistoriqueSSNComponent {
    @Input() person: Person;
    @Output() recapDisplayed = new EventEmitter<Person>();

    /**
     *Creates an instance of HistoriqueSSNComponent.
     * @memberof HistoriqueSSNComponent
     */
    constructor() {
    }

    /**
     * Function that displays all of the infos typed by the user
     * @param {Person} person
     * @memberof HistoriqueSSNComponent
     */
    public displayInfos(person: Person) {
        this.recapDisplayed.emit(person);
    }

}