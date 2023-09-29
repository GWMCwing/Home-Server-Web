'use client';
import PageElement_Splitter from '@/components/App/Note/PageElement/Splitter/Splitter';
import PageElement_Image from '@/components/App/Note/PageElement/image/Image';
import PageElement_Text from '@/components/App/Note/PageElement/text/Text';
import { useSearchParams } from 'next/navigation';

export default function Page({ params: { pageId: fullPageId } }: { params: { pageId: string } }) {
  const pageId = fullPageId.split('-').pop() as string;
  const searchParams = useSearchParams();
  return (
    <>
      <PageElement_Splitter direction="column">
        <PageElement_Text
          text={{
            text: 'Hello, world!',
            _id: pageId,
            elementType: 'text',
            subType: 'text',
          }}
        />
        <PageElement_Image url="https://cataas.com/cat" />
      </PageElement_Splitter>
    </>
  );
}
