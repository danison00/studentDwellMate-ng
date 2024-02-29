import { Property } from './Property';
export interface Profile{
        id: number | null; // Adjusted type to allow null for ID
        name: string;
        faculty: string;
        course: string;
        age: number;
        instagram: string;
        facebook: string;
        profilePhotoUrl: string;
        hasRentedProperty: boolean;
        cityOrigin: string;
        wantsToSharedProperty: boolean;    
        property?: Property;  
      
}