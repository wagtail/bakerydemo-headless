import BlockQuote from './BlockQuote';
import EmbedBlock from './EmbedBlock';
import HeadingBlock from './HeadingBlock';
import ImageBlock from './ImageBlock';
import IngredientsListBlock from './IngredientsListBlock';
import RichTextBlock from './RichTextBlock';
import StepsListBlock from './StepsListBlock';
import TableBlock from './TableBlock';
import TypedTableBlock from './TypedTableBlock';
import type { RecipeBlock, RecipeStreamBlockValue } from './types';

type BlockType = RecipeStreamBlockValue[number]['type'];

const blockComponents: {
  [T in BlockType]: React.ComponentType<{ block: RecipeBlock<T> }>;
} = {
  // Base blocks
  heading_block: HeadingBlock,
  paragraph_block: RichTextBlock,
  image_block: ImageBlock,
  block_quote: BlockQuote,
  embed_block: EmbedBlock,
  // Recipe blocks
  table_block: TableBlock,
  typed_table_block: TypedTableBlock,
  ingredients_list: IngredientsListBlock,
  steps_list: StepsListBlock,
};

type BlockComponent = React.ComponentType<{
  block: RecipeStreamBlockValue[number];
}>;

interface RecipeStreamBlockProps {
  blocks: RecipeStreamBlockValue;
}

export default function RecipeStreamBlock({ blocks }: RecipeStreamBlockProps) {
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
