import { HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { type Repository } from 'typeorm';
import { UserProfileDto } from 'src/user/dto/user-profile.dto';

@Injectable()
export class LoginProvider {
    private readonly logger = new Logger(LoginProvider.name);
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async findOneByName(username: string){
        try{
            const person = await this.userRepository.findOneOrFail({where: {username : username}});
            const user : UserProfileDto = {
                name : person.name,
                profession : person.profession,
                username : person.username,
                id : person.id,
                eMail: person.eMail,
                birthDate: person.birthDate,
                IsActive: person.IsActive,
                language: person.language
            }
            return user;
        }catch(error){
            this.logger.error('[FINDONE]: '+error);
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'User not found.'
              }, HttpStatus.NOT_FOUND, {
                cause: error
              }
            );
        }
    }

    async findOneWithUsername(username: string){
        try{
            const person = await this.userRepository.findOneOrFail({where: {username : username}});
            return person;
        }catch(error){
            this.logger.error('[FINDONE]: '+error);
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'User not found.'
              }, HttpStatus.NOT_FOUND, {
                cause: error
              }
            );
        }
    }
}