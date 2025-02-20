/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    productFunction() : string{
        return 'we use product service';
    }

    productJSON(){
        return {
            name: 'Natdanai',
            lastname: 'Choochan',
            age: 18,
          };
    }
}
