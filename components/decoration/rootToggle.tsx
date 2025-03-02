import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { Code, ScrollText } from "lucide-react";

export function DecorationRootTooggle() {
    return (
       
        <RootToggle
          options={[
            {
              title: 'Plataforma',
              description: 'Guia da plataforma e suas funcionalidades',
              url: '/',
              icon: <ScrollText  size={24} />,
              props: {},
            },
            {
              title: 'Desenvolvedores',
              description: 'Documentação da API e recursos técnicos',
              url: '/developers',
              icon: <Code size={24} />,  
              props: {},
            },
          ]}
        />
    )
}