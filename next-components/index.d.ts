declare module 'next-components-kit' {
    import { FunctionComponent, MouseEvent } from 'react';
  
    type ColorTypes = 'lightBlue' | 'blue' | 'indigo' | 'darkBlue' | 'red' | 'rose' | 'green' | 'teal' | 'yellow' | 'orange' | 'amber' | 'purple' | 'violet' | 'fuchsia' | 'gray' | 'coolGray' | 'trueGray' | 'warmGray' | 'pink' | 'lime' | 'cyan' | 'emerald';
  
    type SizeTypes = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'extraExtraLarge';
  
    type WeightTypes = 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  
    type RadiusTypes = 'none' | 'small' | 'medium' | 'large' | 'full';
  
    type ShadowTypes = 'none' | 'small' | 'medium' | 'large' | 'xl';
  
    interface KitButtonProps { ButtonText?: string; onClick?: (event: MouseEvent<HTMLButtonElement>) => void; color?: ColorTypes; size?: SizeTypes; weight?: WeightTypes; radius?: RadiusTypes; shadow?: ShadowTypes; }
  
    export const MyComponent: FunctionComponent;
    export const KitButton: FunctionComponent<KitButtonProps>;
  }
  