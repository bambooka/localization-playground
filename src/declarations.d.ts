declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '@shared/*' {
  const value: any;
  export default value;
}

declare module '@app/*' {
  const value: any;
  export default value;
}

declare module '@screens/*' {
  const value: any;
  export default value;
}

declare module '@features/*' {
  const value: any;
  export default value;
}

declare module '@entities/*' {
  const value: any;
  export default value;
}

declare module '@widgets/*' {
  const value: any;
  export default value;
}