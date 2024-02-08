export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    provider: string;

}

export const products = [
    {
        id: 1,
        name: 'Galaxy S21',
        price: 799,
        description: 'A large phone with one of the best screens',
        provider: 'Samsung'
      },
      {
        id: 2,
        name: 'iPhone 12',
        price: 699,
        description: 'A great phone with one of the best cameras',
        provider:'Apple'
      },
      {
        id: 3,
        name: 'Redmi Note 10',
        price: 299,
        description: '',
        provider:'Xiaomi'
      },
      {
        id: 4,
        name: 'Mate 40 Pro',
        price: 899,
        description: 'A large phone with one of the best screens',
        provider:'Huawei'
      },
      {
        id: 5,
        name: 'Pixel 4a',
        price: 299,
        description: 'A great phone with one of the best cameras',
        provider:'Google'
      },
      {
        id: 6,
        name: 'Galaxy A52',
        price: 399,
        description: 'A great phone with one of the best cameras',
        provider:'Samsung'

      }    
];