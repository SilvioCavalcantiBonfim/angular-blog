import { animate, state, style, transition, trigger } from "@angular/animations";

export const fade = trigger('fade', [
    state('true', style({
        opacity: 1
    })),
    state('void', style({
        opacity: 0
    })),
    transition(':leave, :enter', [
        animate('200ms ease-in-out')
    ])
]);
