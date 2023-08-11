import { Injectable, Logger, Param,   Body} from '@nestjs/common';
import { UserProviders } from './user.providers'
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';


@Injectable()
export class UserService{
    constructor(private readonly userProviders: UserProviders) {}
    private readonly logger = new Logger(UserService.name);

    findAll(){
        try{
            return this.userProviders.findAll();
        }catch(error){
            this.logger.error('[FINDALL]: '+error);
        }
    }
    findOneByID(@Param('id') id: number) {
        try{
            return this.userProviders.findOneByID(id);
        }catch(error){
            this.logger.error('[FINDONEBYID]: '+error);
        }
    }
    
    create(n_user : CreateUserDto){
        try{
            return this.userProviders.create(n_user);
        }catch(error){
            this.logger.error('[CREATE]: '+error);
        }
    }

    patchUpdate(@Param('id') id: number, @Body() body: any){
        try{
            return this.userProviders.patchUpdate(id, body);
        }catch(error){
            this.logger.error('[PATCHUPDATE]: '+error);
        }
    };
    putUpdate(@Param('id') id: number, @Body() body: UserDto){
        try{
            return this.userProviders.putUpdate(id, body);
        }catch(error){
            this.logger.error('[PUTUPDATE]: '+error);
        }
    }

    delete(@Param('id') id: number){
        try{
            return this.userProviders.delete(id);
        }catch(error){
            this.logger.error('[DELETE]: '+error);
        }
    }
}