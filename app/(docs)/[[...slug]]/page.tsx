import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { Mdxcomponents } from '@/components/mdx';
import { createMetadata } from '@/lib/metadata';
import { metadataImage } from '@/lib/metadataImage';
 
export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
   
  const MDX = page.data.body;
  
  return (
  

    <DocsPage 
    toc={page.data.toc} 
    
    full={page.data.full} 
      breadcrumb={{
        
      enabled: true,
      includePage: true,
      includeSeparator: true,
      includeRoot: false
    }}
    article={{
      className: 'max-sm:pb-16',
    }}
    tableOfContent={{
      style: "clerk",
    }}
    
    >
      
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...Mdxcomponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  
  const description =
    page.data.description ?? 'Documentação oficial da ereemby';

  return createMetadata(
    metadataImage.withImage(page.slugs, {
      title: page.data.title,
      description,
      openGraph: {
        url: `/${page.slugs.join('/')}`,
      },
    }),
  );
}
