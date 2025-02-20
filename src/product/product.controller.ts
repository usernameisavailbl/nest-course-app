/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';


@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService,
                private readonly utilityService:UtilityService,
                private readonly GlobalHelperService:GlobalHelperService
                ) {}

    @Get('/global')
    globalFunction() : string{
        return this.GlobalHelperService.grobalfunc();
    }

    @Get()
    productFunction() : string{
        return this.productService.productFunction();
    }

    @Get('productjson')
    productJSON(){
        return this.productService.productJSON();
    }

    @Get('/shared')
    shareFunction():string{
        return this.utilityService.sharefunc();
    }
}
