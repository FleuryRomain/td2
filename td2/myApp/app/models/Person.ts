import { Ssn } from "./Ssn";
import { Recap } from "./Recap";

/**
 * Object Person
 */
export class Person {
    public firstname: string;
    public lastname: string;
    public ssn: Ssn;

    /**
     * Creates an instance of Person.
     * @param {string} lastname
     * @param {string} firstname
     * @param {string} secu
     * @memberof Person
     */
    constructor(lastname: string, firstname: string, secu: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.ssn = new Ssn(secu);
    }

    /**
     * Function which extracts person's infos (firstname, lasstname, sex etc)
     * @returns
     * @memberof Person
     */
    public extractInfosPerson() {
        let ssn = this.ssn.secu_number;

        return new Recap(
            this.lastname,
            this.firstname,
            this.extractSex(ssn),
            this.extractbirthDate(ssn),
            this.extractBirthPlace(ssn),
            this.extractPosition(ssn))
    }

    /**
     * Function that extracts the sex
     * @private
     * @param {string} secu_number
     * @returns {string}
     * @memberof Person
     */
    private extractSex(secu_number: string): string {
        let sex: string = secu_number.substr(0, 1);
        return sex == "1" || sex == "3" || sex == "8" ? "Man" : "Woman";
    }

    /**
     * Function that extracts birthdate
     * @private
     * @param {string} secu_number
     * @returns {string}
     * @memberof Person
     */
    private extractbirthDate(secu_number: string): string {
        // -- Build a date
        let month = +secu_number.substr(3, 2);
        // -- special case
        if (month == 62 || month == 63) {
            month = 1
        }
        let birth: any = new Date(+secu_number.substr(1, 2), month);
        return birth
    }

    /**
     * Function that extracts birthplace
     * @private
     * @param {string} secu_number
     * @returns {{ dept: string, municipality: string }}
     * @memberof Person
     */
    private extractBirthPlace(secu_number: string): { dept: string, municipality: string } {
        let dept: number = +secu_number.substr(5, 2);

        // --- Case DOM TOM
        if (dept == 97 || dept == 98) {
            return {
                dept: secu_number.substr(5, 3),
                municipality: secu_number.substr(8, 2),
            }
        } else if (dept == 99) {
            return {
                dept: "Stranger",
                municipality: secu_number.substr(7, 3)
            }
        }
        else {
            return {
                dept: secu_number.substr(5, 2),
                municipality: secu_number.substr(7, 3),
            }
        }
    }
    
    /**
     * Function that extracts the position
     * @private
     * @param {string} secu_number
     * @returns {number}
     * @memberof Person
     */
    private extractPosition(secu_number: string): number {
        return +secu_number.substr(10, 3)
    }

}