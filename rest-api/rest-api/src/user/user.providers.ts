import { Injectable, Body, Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { Not, type Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';


@Injectable()
export class UserProviders {
    private readonly logger = new Logger(UserProviders.name);
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async findAll(){ 
        try{
            const temp = await this.userRepository.find();
            const values = temp.map(({ password, ...e }) => e);
            return values;
        }catch(error){
            this.logger.error('[FINDALL]: '+error);
        }
    }
    async findOneByID(id: number){
        try{
            const person = await this.userRepository.findOneOrFail({where: {id:id}});
            delete person.password;
            return person;
        }catch(error){
            this.logger.error('[FINDONE]: '+error);
            return 'App didn\'t find user: '+id;
        }   
    }
    async findOneByName(name: string){
        try{
            const person = await this.userRepository.findOneOrFail({where: {name : name}});
            delete person.password;
            return person;
        }catch(error){
            this.logger.error('[FINDONE]: '+error);
            return 'App didn\'t find user: '+name;
        } 
    }

   async create(n_user: CreateUserDto){
        try{
            const person =  await this.userRepository.findOne({where: {username:n_user.username}});
            if(person === null){
                const user = this.userRepository.create(n_user);
                return await this.userRepository.save<User>(user);
            } 
            else{
                return this.logger.error('This username is using. Enter another username.');
            }
        }catch(error){
            this.logger.error('[CREATE]: '+error);
        }
    }

    async patchUpdate(id: number, @Body() body: UserDto){
        try{
            const person = await this.userRepository.findOneOrFail({where: {id:id}});
            body.id = id;
            this.userRepository.update({id:id}, body)

            return await this.findOneByID(id);
        }catch(error){  
            this.logger.error('[PATCHUSER]: '+error);
            return 'user didn\'t found.';
        }
    }
    async putUpdate(id:number, body : UserDto){
        try{
            const user = await this.userRepository.findOneOrFail({where: {id:id}});
            const temp = { id : 1, name : 'name', password : 'password', profession : 'profession'};
            const bodykeys = Object.keys(body);
            const tempkeys = Object.keys(temp);

            let difference = tempkeys.filter(x => !bodykeys.includes(x));
            if(difference.length != 0){
                return 'Some informations are empty.';
            }
            body.id = id;
            this.userRepository.update({id:id}, body)
            return await this.findOneByID(id);
        }catch(error){
            this.logger.error('[PUTUSER]: '+error);
            return 'user didn\'t found.';
        }
    }

    async delete(id:number){
        try{
            if(!this.findOneByID(id)){
                return 'user didn\'t find.'
            }
            this.userRepository.delete({id: id});
            return 'user deleted.';
        }catch(error){
            this.logger.error('[DELETE]: '+error);
        }
    }
}