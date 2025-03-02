import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import fumadocsMdxComponents from "fumadocs-ui/mdx";
import { Card, Cards } from "./card";
import { Step, Steps } from "./steps";
import { MDXComponents } from "mdx/types";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { Callout } from "./callout";

export const Mdxcomponents: MDXComponents  = { 
    ...fumadocsMdxComponents,
    Cards,
    RootToggle,
    Card,
    Step, Steps,
    ImageZoom,
    Tab, Tabs,
    Callout,
    Accordion, Accordions,
};
