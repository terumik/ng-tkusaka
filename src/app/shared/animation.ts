import { state, trigger, style, transition, animate, sequence, query } from '@angular/animations';


export const Animations = {

  // -- Common Animations
  fadeIn: trigger('fadeIn', [
    transition(':enter', [
      sequence([
        // initial state
        query(':self, *', style({
          opacity: 0,
        }), {optional: true}),
        // animation end
        query(':self, *', animate('{{duration}}s {{animationStyle}}', style({
          opacity: 1,
        })), {optional: true}),
      ]),
    ], {params: {duration: 3, animationStyle: 'ease-in'}})
  ]),

  slideIn: trigger('slideIn', [
    transition(':enter', [
      sequence([
        // initial state
        query(':self, *', style({
          opacity: 0,
          position: 'relative',
          top: '{{positionTop}}',
          left: '{{positionLeft}}',
        }), {optional: true}),
        // animation end
        query(':self, *', animate('{{duration}}s {{animationStyle}}', style({
          opacity: 1,
          position: 'relative',
          top: '0',
          left: '0',
        })), {optional: true}),
      ]),
    ], {params: {duration: 1, animationStyle: 'ease-in', positionTop: '0.5rem', positionLeft: '0'}})
  ]),

  // -- For Hamburger Menu
  burgerToggleTop: trigger('burgerToggleTop', [
    state('opened', style({
      transform: 'rotate(45deg)',
      transformOrigin: 'top left',
    })),
    state('closed', style({
      transform: 'rotate(0)'
    })),
    transition('* => *', [
      animate('0.2s ease-out'),
    ]),
  ]),
  burgerToggleCenter: trigger('burgerToggleCenter', [
    state('opened', style({
      transform: 'rotate(0)',
      opacity: '0'
    })),
    state('closed', style({
      transform: 'rotate(0)',
    })),
    transition('* => *', [
      animate('0.2s ease-out'),
    ]),
  ]),
  burgerToggleBottom: trigger('burgerToggleBottom', [
    state('opened', style({
      transform: 'rotate(-45deg)',
      transformOrigin: 'bottom left',
    })),
    state('closed', style({
      transform: 'rotate(0)',
    })),
    transition('* => *', [
      animate('0.2s ease-out'),
    ]),
  ]),
}



