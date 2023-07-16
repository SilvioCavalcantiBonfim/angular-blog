import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from "@angular/animations";

export const shakeHorizontal: AnimationTriggerMetadata = trigger('shakeHorizontal', [
  state('false', style({
    transform: 'translate(0)'
  })),
  transition('true => false', [
    style({transform: 'translateX(0)'}),
    animate('80ms linear', style({transform: 'translateX(-10px)'})),
    animate('80ms linear', style({transform: 'translateX(10px)'})),
    animate('80ms linear', style({transform: 'translateX(-10px)'})),
    animate('80ms linear', style({transform: 'translateX(10px)'})),
    animate('80ms linear', style({transform: 'translateX(-10px)'})),
    animate('80ms linear', style({transform: 'translateX(10px)'})),
    animate('80ms linear', style({transform: 'translateX(-10px)'})),
    animate('80ms linear', style({transform: 'translateX(8px)'})),
    animate('80ms linear', style({transform: 'translateX(-8px)'})),
    animate('80ms linear', style({transform: 'translateX(0)'})),
  ])
])