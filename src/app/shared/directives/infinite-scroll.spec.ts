import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScroll } from './infinite-scroll';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  imports: [InfiniteScroll],
  template: `<div appInfiniteScroll></div>`,
})
class HostComponent {};

describe('InfiniteScroll', () => {

  let fixture: ComponentFixture<HostComponent>


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [provideRouter([])]
    }).compileComponents();


    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  })


  it('should create an instance infinteScroll', () => {
    // const directive = new InfiniteScroll();
    const element = fixture.nativeElement.querySelector('[appInfiniteScroll]');
    expect(element).toBeTruthy();
  });
});
