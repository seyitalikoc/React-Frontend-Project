import { Injectable, Scope } from '@nestjs/common';
import { UserProfileDto } from '../user/dto/user-profile.dto';

@Injectable({scope : Scope.REQUEST})
export class ContextService{
    private context;

    getContext(): Promise<UserProfileDto>{
        return this.context;
    }
    setContext(obj: UserProfileDto){
        this.context = obj;
    }
}