// Phone model
export class PhoneModel {
    
        id: string;
        name: string;
        image: string;
    
        constructor(promos: PhoneModel) {    
            this.id = promos !== null ? promos.id : '';
            this.name = promos !== null ? promos.name : '';
            this.image = promos !== null ? promos.image : '';
        }
    }