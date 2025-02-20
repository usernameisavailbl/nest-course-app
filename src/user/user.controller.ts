/* eslint-disable prettier/prettier */
import { Controller ,Get} from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('user')
export class UserController {
    constructor(private readonly utilityService:UtilityService,
                private readonly GlobalHelperService:GlobalHelperService
    ) {}
    
        
    @Get('/shared')
    shareFunction():string{
        return this.utilityService.sharefunc();
    }

    @Get('/global')
    globalFunction() : string{
        return this.GlobalHelperService.grobalfunc();
    }
}
