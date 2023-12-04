// Shallow integration tests
// Only going to test a single component 
// an none of it's child components or directives

import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;
    // fixture is a wrapper of a component (ComponentFixture) 
    // and has type of componet it is wrapping ie the HeroComponent

    beforeEach(() => {
        // creating a module specifically for testing
        // because the app module has many components
        // and we only want to test one component
        TestBed.configureTestingModule({
            // matches the layout of the app module
            declarations: [HeroComponent],
            // schemas tell Angular how to process the HTML it's been handed
            schemas: [NO_ERRORS_SCHEMA],
            // - don't validate the schema/template
            // removes the console warning for RouterLink
        });
        // calling this func tells TestBed to use the TestingModule
        // and to construct the HeroComponent
        fixture = TestBed.createComponent(HeroComponent);
        // createComponent() func returns a ComponentFixture
        // which is a wrapper for a component that's used in testing
        // has a few extra properties as well
        // Can now access the component instance itself
    });

    it('should have the correct hero', () => {
        // arrange
        fixture.componentInstance.hero = {id:1, name: 'super', strength: 3};
        fixture.detectChanges();  // and see any console warnings

        // act - none

        // assert
        expect(fixture.componentInstance.hero.name).toEqual('super');
    })

    // test to check if template is correct - cannot do this in an isolated test
    it('should render the hero name in an anchor tag', () => {
        // arrange - replicate action of external component
        fixture.componentInstance.hero = {id:1, name: 'super', strength: 3};
        fixture.detectChanges();  // run changes detection & update any bindings on component

        // assert 
        // Method 1: debugElement is wrapper around the actual DOM node
        // it can access directives like the routerLink directive or componentInstance
        // use .query or .queryAll
        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('super');
        // can assign variable eg, let debugElemA = fixture.debugElement.query(By.css('a'));
        // then use, expect(debugElemA.nativeElement.textContent).etc

        // or Method 2: nativeElement gets a handle to the DOM element - it exposes it
        // that represents the container for the the template
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('super');
    })
})