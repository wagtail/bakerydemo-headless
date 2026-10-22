import BlockQuote from './BlockQuote';
import CaptionedImageBlock from './CaptionedImageBlock';
import EmbedBlock from './EmbedBlock';
import HeadingBlock from './HeadingBlock';
import RichTextBlock from './RichTextBlock';
import type { BaseBlock, BaseStreamBlockValue } from './types';

type BlockType = BaseStreamBlockValue[number]['type'];

const blockComponents: {
  [T in BlockType]: React.ComponentType<{ block: BaseBlock<T> }>;
} = {
  heading_block: HeadingBlock,
  paragraph_block: RichTextBlock,
  image_block: CaptionedImageBlock,
  block_quote: BlockQuote,
  embed_block: EmbedBlock,
};

type BlockComponent = React.ComponentType<{
  block: BaseStreamBlockValue[number];
}>;

interface BaseStreamBlockProps {
  blocks: BaseStreamBlockValue;
}

export default function BaseStreamBlock({ blocks }: BaseStreamBlockProps) {
  return (
    <div>
      {blocks.map((block) => {
        const Block = blockComponents[block.type] as BlockComponent;
        return Block ? (
          <div key={block.id} className={`block-${block.type}`}>
            <Block block={block} />
          </div>
        ) : (
          <pre key={block.id}>{JSON.stringify(block, null, 2)}</pre>
        );
      })}
    </div>
  );
}
