import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import icons from './icons';
import { createElement } from "react";

export const source = loader({
  baseUrl: '/',
  source: createMDXSource(docs, meta),
  icon(key) {
    if (key && key in icons){
      return createElement(icons[key]);
    }
  },
});
