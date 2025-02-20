/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalHelperService {
    grobalfunc():string {
        return 'Use groble module'
    }
}
