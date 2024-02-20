import { User } from './User';
import { Property } from './Property';
export interface DataAccount{

    id?: number,
    user?: User;
    name: string;
    faculty: string;
    course: string;
    age: number;
    email: string;
    instagram: string;
    facebook: string;
    whatsapp: string;
    profilePhotoUrl: string;
    hasRentedProperty: boolean;
    cityOrigin: string;
    wantsToSharedProperty: boolean;
    property?: Property


}