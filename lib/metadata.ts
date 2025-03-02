import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    metadataBase: new URL('https://docs.ereemby.com.br'),
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://docs.ereemby.com.br',
      siteName: 'Ereemby Docs',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@wwwgostozin',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      ...override.twitter,
    },
  };
}
