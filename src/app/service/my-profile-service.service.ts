import { Property } from './../model/Property';
import { Injectable } from '@angular/core';
import { Profile } from '../model/Profile.interface';
import { ProfileDetailsComponent } from '../pages/profile-details/profile-details.component';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyProfileServiceService {
  profiles: Profile[] = [
    {
      age: 22,
      cityOrigin: 'Belém',
      course: 'Ciência da Computação',
      facebook: 'https://www.facebook.com/joaosilva',
      instagram: 'https://www.instagram.com/joaosilva',
      faculty: 'UFPA',
      hasRentedProperty: false,
      id: 1,
      name: 'João Silva',
      profilePhotoUrl:
        'https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg',
      wantsToSharedProperty: true,
    },
    {
      age: 21,
      cityOrigin: 'Marabá',
      course: 'Engenharia Civil',
      facebook: 'https://www.facebook.com/mariagomes',
      instagram: 'https://www.instagram.com/mariagomes',
      faculty: 'UEPA',
      hasRentedProperty: true,
      id: 2,
      name: 'Maria Gomes',
      profilePhotoUrl:
        'https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg',
      wantsToSharedProperty: false,
      property: {
        city: "Tucuruí",
        state: "Pará",
        street: "Rua fortaleza",
        neighborhood: "Bela Vista",
        additionalDetails: "Rua ao lado da Radio energia",
        houseNumber: "14",
        postalCode: "4000-9766",
        propertyPhoto: []

      }
    },
    {
      age: 23,
      cityOrigin: 'Santarém',
      course: 'Medicina',
      facebook: 'https://www.facebook.com/pedrodantas',
      instagram: 'https://www.instagram.com/pedrodantas',
      faculty: 'UNIFESPA',
      hasRentedProperty: false,
      id: 3,
      name: 'Pedro Dantas',
      profilePhotoUrl:
        'https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg',
      wantsToSharedProperty: true,
    },
    {
      age: 20,
      cityOrigin: 'Altamira',
      course: 'Direito',
      facebook: 'https://www.facebook.com/anacarvalho',
      instagram: 'https://www.instagram.com/anacarvalho',
      faculty: 'UFRA',
      hasRentedProperty: true,
      id: 4,
      name: 'Ana Carvalho',
      profilePhotoUrl:
        'https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg',
      wantsToSharedProperty: false,
    },
    {
      age: 24,
      cityOrigin: 'Castanhal',
      course: 'Administração',
      facebook: 'https://www.facebook.com/brunofernandes',
      instagram: 'https://www.instagram.com/brunofernandes',
      faculty: 'FAMAZ',
      hasRentedProperty: false,
      id: 5,
      name: 'Bruno Fernandes',
      profilePhotoUrl:
        'https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg',
      wantsToSharedProperty: true,
    },
  ];
  constructor() {}

  public getProfileById(id: number): Observable<Profile> {
    const profile = this.profiles.filter((p) => p.id === id);

    return of(profile[0]).pipe(delay(2000));
  }
  public getAllProfiles(): Observable<Profile[]> {
    return of(this.profiles).pipe(delay(2000));
  }
}
