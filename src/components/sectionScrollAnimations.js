import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const setupSectionScrollAnimation = (element, options = {}) => {
  if (!element) return null;

  const {
    xFrom = '18vw',
    xTo = 0,
    yFrom = 0,
    yTo = 0,
    opacityFrom = 0,
    opacityTo = 1,
    duration = 1.3,
    ease = 'power3.out',
    trigger = element,
    start = 'top 75%',
    end = 'bottom 55%',
    scrub = 0.8,
  } = options;

  return gsap.fromTo(
    element,
    {
      x: xFrom,
      y: yFrom,
      opacity: opacityFrom,
    },
    {
      x: xTo,
      y: yTo,
      opacity: opacityTo,
      duration,
      ease,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
        toggleActions: 'play none none reverse',
      },
    }
  );
};
