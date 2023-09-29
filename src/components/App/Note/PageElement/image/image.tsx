import Image from 'next/image';
import PageElement from '../PageElement';
import { Resizable } from 're-resizable';
import { useRef } from 'react';

export default function PageElement_Image({ url, alt = '' }: { url: string; alt?: string }) {
  const resizableRef = useRef<Resizable>(null);
  return (
    <PageElement>
      <Resizable
        lockAspectRatio={true}
        ref={resizableRef}
        maxWidth={'90%'}
        style={{
          position: 'relative',
        }}
      >
        <Image
          alt={alt}
          src={url}
          width={0}
          height={0}
          objectFit="contain"
          sizes="100vw"
          style={{
            height: '100%',
            width: 'auto',
            aspectRatio: 'auto',
          }}
          onLoadingComplete={(e) => {
            resizableRef.current?.updateSize({
              width: e.naturalWidth,
              height: e.naturalHeight,
            });
          }}
        />
      </Resizable>
    </PageElement>
  );
}
