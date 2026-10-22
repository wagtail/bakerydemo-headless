import type { RecipeBlock } from './types';

export default function IngredientsListBlock({
  block: { value },
}: {
  block: RecipeBlock<'ingredients_list'>;
}) {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {value.map((ingredient, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: ingredient ?? '' }} />
        ))}
      </ul>
    </div>
  );
}
