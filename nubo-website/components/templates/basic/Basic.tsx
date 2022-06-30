/** @jsx h */
import { h, FunctionalComponent } from 'preact';
import { tw } from '@twind';
import { Page } from '@nubo-shared/pages/mod.ts';
import Counter from '../../../islands/Counter.tsx';

interface Props {
  page: Page;
}

export const BasicTemplate: FunctionalComponent<Props> = ({ page }) => {
  return (
    <div class={tw`flex h-screen`}>
      <div class={tw`m-auto`}>
        <h1 class={tw`text-6xl text-center`}>{page.title}</h1>

        <Counter start={5} />
      </div>
    </div>
  );
};
