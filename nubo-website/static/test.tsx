/** @jsx h */
import { h, FunctionalComponent } from 'preact';
import { tw } from '@twind';

export const BasicTemplate: FunctionalComponent = () => {
  return (
    <div class={tw`flex h-screen`}>
      <div class={tw`m-auto`}>
        <h1 class={tw`text-6xl text-center`}>Test</h1>
      </div>
    </div>
  );
};
