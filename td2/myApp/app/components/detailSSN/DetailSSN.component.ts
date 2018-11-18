import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recap } from "../../models/Recap";
import { DepartmentService } from "../../services/department-service";
import { MunicipalityService } from "../../services/municipality-service";


@Component({
    selector: 'detail-ssn',
    templateUrl: 'app/components/detailSSN/detailSSN.component.html',
    styleUrls: ['app/components/detailSSN/detailSSN.component.css'],
})

/**
 * @export
 * @class DetailSSNComponent
 * @implements {OnInit}
 * @implements {OnChanges}
 */
export default class DetailSSNComponent implements OnInit, OnChanges {
    @Input() recapPerson: Recap;
    private departmentName: string;
    private municipalityName: string;

    /**
     * Creates an instance of DetailSSNComponent.
     * @param {DepartmentService} departmentService
     * @param {MunicipalityService} municipalityService
     * @memberof DetailSSNComponent
     */
    constructor(private departmentService: DepartmentService,
                private municipalityService: MunicipalityService)
    {}

    /**
     * Function which affects changes
     * @param {SimpleChanges} changes
     * @memberof DetailSSNComponent
     */
    ngOnChanges(changes: SimpleChanges){
        if(changes.recapPerson){
            this.getDepartmentName(this.recapPerson.birthPlace.dept);
            this.getMunicipalityName(this.recapPerson.birthPlace.dept, this.recapPerson.birthPlace.municipality);
        }
    }

    /**
     * Function 
     * @memberof DetailSSNComponent
     */
    ngOnInit(){
        this.getDepartmentName(this.recapPerson.birthPlace.dept);
        this.getMunicipalityName(this.recapPerson.birthPlace.dept, this.recapPerson.birthPlace.municipality);
    }

    /**
     * Function that calculates the age
     * @private
     * @param {*} birthDate
     * @returns
     * @memberof DetailSSNComponent
     */
    private ageCalculation(birthDate: any){
        var timeDiff = Math.abs(Date.now() - birthDate);
        return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }

    /**
     * Function that get the name of a department 
     * @private
     * @param {string} numDepartment
     * @memberof DetailSSNComponent
     */
    private getDepartmentName(numDepartment: string){
        if (numDepartment != "Stranger") {
            this.departmentService.getDepartment(+numDepartment)
                .subscribe(res => this.departmentName = res.lastname)
        } else {
            this.departmentName = '';
        }
    }

    /**
     * Function that get the name of municipality
     * @private
     * @param {string} numDepartment
     * @param {string} numMun
     * @memberof DetailSSNComponent
     */
    private getMunicipalityName(numDepartment: string, numMun: string) {
        if (numDepartment != "Stranger") {
            this.municipalityService.getMunicipality(+(numDepartment + numMun))
                .subscribe(res => this.municipalityName = res.lastname)
        } else {
            this.municipalityService.getCountry()
                .subscribe(res => Object.keys(res)
                    .filter(key => key === numMun)
                    .map(keyFound => this.municipalityName = res[keyFound])
                )
        }
    }
}