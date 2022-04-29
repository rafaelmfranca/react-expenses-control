declare module 'animated-number-react' {
  import React from 'react';

  interface AnimatedNumberProps {
    value: string | number;
    duration?: number;
    delay?: number;
    className?: string;
    easing?: string;
    formatValue?: (value: number) => void;
  }

  export default class AnimatedNumber extends React.Component<AnimatedNumberProps> {}
}
