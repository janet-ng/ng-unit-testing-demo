import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        // add some data
        HEROES = [
            {id:1, name: 'Spider', strength: 8},
            {id:2, name: 'Wonder', strength: 24},
            {id:3, name: 'Super', strength: 55},
        ]

        // mock the service - this call will create an object of the 3 methods
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {

        it('should remove the indicated hero from the heroes list', () => {
            // create a simple observable
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;  // arrange

            component.delete(HEROES[2]);  // act

            expect(component.heroes.length).toBe(2);  // assert
            // could also check if specified hero was deleted        
        })

        // interaction test
        it('should call deleteHero with correct hero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;  // arrange

            component.delete(HEROES[2]);  // act

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
            // Homework - could also check if we are subscribing to the result of deleteHero call
            // this would be another test
        })

    })
})