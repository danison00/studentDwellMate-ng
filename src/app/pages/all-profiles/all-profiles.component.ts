import { Component } from '@angular/core';
import { Profile } from 'src/app/model/Profile.interface';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.scss'],
})
export class AllProfilesComponent {
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
}
