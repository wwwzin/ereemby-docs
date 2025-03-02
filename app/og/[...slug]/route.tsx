import { type ImageResponse } from 'next/og';
import { metadataImage } from '@/lib/metadataImage';
import { generateOGImage } from '@/app/og/[...slug]/og';

export const GET = metadataImage.createAPI((page): ImageResponse => {
  return generateOGImage({
    primaryTextColor: 'rgb(240,240,240)',
    title: page.data.title,
    description: page.data.description,
  });
});

export function generateStaticParams(): {
  slug: string[];
}[] {
  return metadataImage.generateParams();
}