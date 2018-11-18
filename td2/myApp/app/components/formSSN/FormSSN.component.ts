import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from "../../models/Person";
import { Recap } from "../../models/Recap";

@Component({
    /* Setup Component form with desired inputs and stuff */
    selector: 'form-ssn',
    templateUrl: './app/components/formSSN/formSSN.component.html',
    styleUrls: ['app/components/formSSN/formSSN.component.css']
})

/**
 * Setting up the default FormSSNComponent class to match our form
 * @export
 * @class FormComponent
 */
export default class FormSSNComponent{
    public Ssnform : FormGroup;

    public firstname : string;
    public lastname : string;
    public ssn : string;
    public person : Person;
    public recapPerson: Recap; // Contain all of the infos from Person
    public arrayPerson : Array<Person> = [];

    /**
     * Creates an instance of FormSSNComponent.
     * @memberof FormSSNComponent
     */
    constructor(){
        const fb = new FormBuilder();
        this.Ssnform = fb.group({
            "firstname" : ['',Validators.required],
            "lastname" : ['',Validators.required],
            "ssn" : ['',isSsnOk]
        });
    }
    
    /**
     * Function that is launched after the submission of the form
     * @memberof FormSSNComponent
     */
    public onSubmit(){
        this.firstname = this.Ssnform.get("firstname").value;
        this.lastname = this.Ssnform.get("lastname").value;
        this.ssn = this.Ssnform.get("ssn").value;
        this.person = new Person(this.lastname, this.firstname, this.ssn);
        this.recapPerson = this.person.extractInfosPerson();
        this.arrayPerson.push(this.person);
    }

    /**
     * Function that displays all the infos from arrayPerson
     * @param {Person} person
     */
    public displayInfoFromHisto(person: Person){
        this.recapPerson = person.extractInfosPerson();
    }       
}

/**
 * Function that controls SSN number and check if it's correct (based on the RegExp function below)
 * @param {*} control
 * @returns
 */
function controlSsnValue(control: any) {
    let regExpSsn = new RegExp("^" +
        "([1-37-8])" +
        "([0-9]{2})" +
        "(0[0-9]|[2-35-9][0-9]|[14][0-2])" +
        "((0[1-9]|[1-8][0-9]|9[0-69]|2[abAB])(00[1-9]|0[1-9][0-9]|[1-8][0-9]{2}|9[0-8][0-9]|990)|(9[78][0-9])(0[1-9]|[1-8][0-9]|90))" +
        "(00[1-9]|0[1-9][0-9]|[1-9][0-9]{2})" +
        "(0[1-9]|[1-8][0-9]|9[0-7])$");

    return regExpSsn.test(control);
}

/**
 * Function which controls if SSN key (nir) is correct
 * @param {*} control
 * @returns
 */
function controlSsnKey(control: any) {
    // -- Extract classic information
    let myValue: string = control.substr(0, 13);
    let myNir: string = control.substr(13);
    // -- replace special value like corsica
    myValue.replace('2B', "18").replace("2A", "19");
    // -- transform as number
    let myNumber: number = +myValue;
    return (97 - (myNumber % 97) == +myNir)
}

/**
 * Function that's verifying if the SSN is valid
 * @param {FormControl} control
 * @returns {*}
 */
function isSsnOk(control: FormControl): any {
    return controlSsnValue(control.value) &&
    controlSsnKey(control.value) ? null : {ssn:true};
}

