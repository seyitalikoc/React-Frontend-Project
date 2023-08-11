import {
    IsBoolean,
    IsDateString,
    IsEmail,
    IsInt,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';
  
export class UserDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    profession: string;
  
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(2, { message: 'Password must have atleast 2 characters.' })
    @IsString()
    password: string;
  
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @MinLength(2, { message: 'Password must have atleast 2 characters.' })
    @IsEmail()
    eMail: string;

    @IsDateString()
    @IsNotEmpty()
    birthDate : Date;

    @IsBoolean()
    @IsNotEmpty()
    IsActive : boolean;

    @IsString()
    @IsNotEmpty()
    language : string;
}