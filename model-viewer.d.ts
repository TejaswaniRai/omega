declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}

interface ModelViewerJSX {
  src?: string;
  alt?: string;
  poster?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'interaction' | 'manual';
  'auto-rotate'?: boolean;
  'auto-rotate-delay'?: number;
  'rotation-per-second'?: string;
  'camera-controls'?: boolean;
  'camera-orbit'?: string;
  'camera-target'?: string;
  'field-of-view'?: string;
  'min-camera-orbit'?: string;
  'max-camera-orbit'?: string;
  'min-field-of-view'?: string;
  'max-field-of-view'?: string;
  'touch-action'?: string;
  'disable-zoom'?: boolean;
  'disable-pan'?: boolean;
  'disable-tap'?: boolean;
  'interpolation-decay'?: number;
  ar?: boolean;
  'ar-modes'?: string;
  'ar-scale'?: string;
  'ar-placement'?: string;
  'ios-src'?: string;
  'xr-environment'?: boolean;
  skybox?: string;
  'environment-image'?: string;
  exposure?: string;
  'shadow-intensity'?: string;
  'shadow-softness'?: string;
  animation?: string;
  'animation-name'?: string;
  autoplay?: boolean;
  'animation-crossfade-duration'?: number;
  ref?: any;
  className?: string;
  style?: React.CSSProperties;
  slot?: string;
}
