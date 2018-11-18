/**
 * @export
 * @class Ssn
 */
export class Ssn {
    // -- Attribute definition
    public secu_number: string;

    /**
     * Creates an instance of Ssn.
     * @param {string} secu_number
     * @memberof Ssn
     */
    constructor(secu_number: string) {
        this.secu_number = secu_number;
    }
}