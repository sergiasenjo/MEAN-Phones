// Phone model
export class PhoneModel {
    
    _id: string;
    name: string;
    image: string;

    constructor(phone: PhoneModel) {    
        this._id = phone !== undefined ? phone._id : '';
        this.name = phone !== undefined ? phone.name : '';
        this.image = phone !== undefined ? phone.image : '';
    }
}