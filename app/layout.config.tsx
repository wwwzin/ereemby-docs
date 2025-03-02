import { DecorationTitle } from '@/components/decoration/title';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: { 
    title: <DecorationTitle />,
    transparentMode: "none", 
  },

};
