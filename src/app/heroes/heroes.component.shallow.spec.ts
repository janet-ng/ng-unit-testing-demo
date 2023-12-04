import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component"
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";

describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService; // declare the mockHeroService;
    let HEROES; // for our sample data

    beforeEach(() => {
        // initialised sample data
        HEROES = [
            {id:1, name: 'Spider', strength: 8},
            {id:2, name: 'Wonder', strength: 24},
            {id:3, name: 'Super', strength: 55},
        ];

        // create the mockHeroService - just like the real one
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [
                // when asked for the real HeroService, provide the mockHeroService
                { provide: HeroService, useValue: mockHeroService }
                // longhand provider syntax
            ],
            schemas: [NO_ERRORS_SCHEMA]  // we do have a child component, so ignore it
        })
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set heroes correctly from the service', () => {
        // construct the component
        mockHeroService.getHeroes.and.returnValue(of(HEROES)); // observable around that array of sample data
        // In order for ngOnInit to fire, we have to run change detection 
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });
})