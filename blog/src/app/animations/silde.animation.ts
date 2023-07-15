import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const slide: any = trigger('slide', [
  transition('* => *', [
    query(':enter', [
      style({transformOrigin: 'top left',transform: 'scaleX(0)', opacity: '0'}),
      animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({ zIndex: '40', transform: 'scaleX(1)', opacity: '1'}))
    ], { optional: true }),
    query(':leave', [
      animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({ zIndex: '30', opacity: '0' }))
    ], { optional: true })
  ])
])