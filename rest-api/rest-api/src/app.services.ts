import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService{
    private readonly logger = new Logger(AppService.name);

    getHello(): string {
        try{
            return this.get();
        }catch(error){
            this.logger.error('[GETHELLO]: '+error);
            this.logger.warn('this is warn');
            this.logger.log('this is log');
            this.logger.debug('this is debug');        
            this.logger.verbose('this is verbose');
        }
    }
    get(){
        return 'Welcome to REST API';
    }
}