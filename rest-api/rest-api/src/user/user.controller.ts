import { Controller,Logger,   Delete,Get,Param,   Post,Body,   Patch,Put, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { JwtGuard } from '../guard/jwt.guard';

@Controller('users')
export class UserController {
    private readonly logger  = new Logger(UserController.name);
    constructor(private readonly userService: UserService) {}
    
    //@UseGuards(JwtGuard)
    @Get('')
    findAll(){
        try{
            return this.userService.findAll();
        }catch(error){
            this.logger?.error('[FINDALL]: '+error);
        }
    }
    //@UseGuards(JwtGuard)
    @Get('/:id')
    findOneById(@Param('id') id: number){
        try{
            return this.userService.findOneByID(id) ;
        }catch(error){
            this.logger?.error('[FINDONEBYID]: '+error);
        }
    }

    //@UseGuards(JwtGuard)
    @Post('/create')
    create(@Body() newUser: CreateUserDto){
        try{
            return this.userService.create(newUser);
        }catch(error){
            this.logger?.error('[CREATE]: '+error);
        }
    }

    //@UseGuards(JwtGuard)
    @Patch('/:id')
    patchUpdate(@Param('id') id: number, @Body() body: any){
        try{
            return this.userService.patchUpdate(id, body);
        }catch(error){
            this.logger?.error('[PATCHUPDATE]: '+error);
        }
    }
    //@UseGuards(JwtGuard)
    @Put('/:id')
    putUpdate(@Param('id') id: number, @Body() body: UserDto){
        try{
            return this.userService.putUpdate(id, body);
        }catch(error){
            this.logger?.error('[PUTUPDATE]: '+error);
        }        
    }

    //@UseGuards(JwtGuard)
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<String>{
        try{
            return this.userService.delete(id);
        }catch(error){
            this.logger?.error('[DELETE]: '+error);
        } 
    }
}