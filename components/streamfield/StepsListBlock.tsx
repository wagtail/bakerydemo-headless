import type { RecipeBlock } from './types';

const difficultyLabels = {
  S: 'Easy',
  M: 'Medium',
  L: 'Hard',
} as const;

export default function StepsListBlock({
  block: { value },
}: {
  block: RecipeBlock<'steps_list'>;
}) {
  return (
    <div>
      <h3>Instructions</h3>
      <ol>
        {value.map((step, i) => (
          <li key={i}>
            <div dangerouslySetInnerHTML={{ __html: step.text ?? '' }} />
            {step.difficulty && (
              <span>{difficultyLabels[step.difficulty]}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
