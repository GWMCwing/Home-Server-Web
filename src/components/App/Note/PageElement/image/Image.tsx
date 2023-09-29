import Image from 'next/image';
import PageElement from '../PageElement';
import { Resizable } from 're-resizable';
import { useRef } from 'react';

export default function PageElement_Image({ url, alt = '' }: { url: string; alt?: string }) {
  const pageElementRef = useRef<HTMLDivElement>(null);
  const resizableRef = useRef<Resizable>(null);
  return (
    <PageElement ref={pageElementRef}>
      <Resizable
        lockAspectRatio={true}
        ref={resizableRef}
        style={{
          position: 'relative',
        }}
        onResize={(e, direction, ref, d) => {
          resizableRef.current?.updateSize({
            width: Math.min(ref.offsetWidth, pageElementRef.current?.offsetWidth ?? Infinity),
            height: Math.min(ref.offsetHeight, pageElementRef.current?.offsetHeight ?? Infinity),
          });
        }}
      >
        <Image
          alt={alt}
          src={url}
          width={0}
          height={0}
          objectFit="cover"
          sizes="100vw"
          style={{
            height: 'auto',
            width: '100%',
            aspectRatio: 'auto',
          }}
          onLoadingComplete={(e) => {
            if (resizableRef.current === null) return;
            if (pageElementRef.current === null) return;
            const pe = pageElementRef.current;
            const style = window.getComputedStyle(pe);
            const paddingInline = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
            const paddingBlock = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
            const aspectRatio = e.naturalWidth / e.naturalHeight;
            // const width = Math.min(e.width, pe.clientWidth - padding ?? Infinity);
            // resizableRef.current.updateSize({
            //   width: width,
            //   height: width / aspectRatio,
            // });
            const height = Math.min(e.height, pe.clientHeight - paddingBlock ?? Infinity);
            resizableRef.current.updateSize({
              width: height * aspectRatio,
              height: height,
            });
          }}
        />
      </Resizable>
    </PageElement>
  );
}
