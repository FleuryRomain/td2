/**
 * @export
 * @class Recap
 */
export class Recap {
    lastname: string;
    firstname: string;
    sex: string;
    birthDate: string;
    birthPlace: { dept: string, municipality: string };
    birthPosition: number;

    /**
     * Creates an instance of Recap.
     * @param {string} lastname
     * @param {string} firstname
     * @param {string} sex
     * @param {string} birthDate
     * @param {{ dept: string, municipality: string }} birthPlace
     * @param {number} birthPosition
     * @memberof Recap
     */
    constructor(lastname: string, firstname: string, sex: string, birthDate: string, birthPlace: { dept: string, municipality: string }, birthPosition: number) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.sex = sex;
        this.birthDate = birthDate;
        this.birthPlace = birthPlace;
        this.birthPosition = birthPosition;
    }
}