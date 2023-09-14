'use client';
import PageElement_Text from '@/components/App/Note/PageElement/text/text';
import { useSearchParams } from 'next/navigation';

export default function Page({ params: { pageId: fullPageId } }: { params: { pageId: string } }) {
  const pageId = fullPageId.split('-').pop() as string;
  const searchParams = useSearchParams();
  return (
    <>
      <h1>{fullPageId}</h1>
      <h2>{pageId}</h2>
      <PageElement_Text
        text={{
          text: 'Hello, world!',
          _id: pageId,
          elementType: 'text',
          subType: 'text',
        }}
      />
    </>
  );
}
