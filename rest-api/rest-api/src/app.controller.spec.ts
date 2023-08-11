import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.services';


describe('AppController', () => {
    let appController : AppController;
    let appService : AppService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers : [AppController],
            providers: [AppService],
    }).compile();
    
    appService = moduleRef.get<AppService>(AppService);
    appController = moduleRef.get<AppController>(AppController);
    });

    describe('get', ()=> {
        it('should return a string', async () => {
            const result = '';
            jest.spyOn(appService,'get').mockImplementation(() => result);

            expect(await appController.getHello()).toBe(result);
        });
    });
});