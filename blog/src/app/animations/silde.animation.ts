import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const slide: any = trigger('slide', [
  transition('0 => 1, 1 => 2, 2 => 0', [
    query(':enter', [
      style({transformOrigin: 'top left',transform: 'scaleX(0)', opacity: '0'}),
      animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({ zIndex: '40', transform: 'scaleX(1)', opacity: '1'}))
    ], { optional: true }),
    query(':leave', [
      animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({ zIndex: '30', opacity: '0' }))
    ], { optional: true })
  ]),
  transition('1 => 0, 2 => 1, 0 => 2', [
    query(':enter', [
      style({transformOrigin: 'top right',transform: 'scaleX(0)', opacity: '0' }),
      animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({ zIndex: '40', transform: 'scaleX(1)', opacity: '1' }))
    ], { optional: true }),
    query(':leave', [
      animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({ zIndex: '30' }))
    ], { optional: true })
  ])
])