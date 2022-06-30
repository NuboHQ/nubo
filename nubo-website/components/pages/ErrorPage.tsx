/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

export interface ErrorPageProps {
  statusCode: number;
  message?: string;
}

export default function ErrorPage({ statusCode, message }: ErrorPageProps) {
  return (
    <div class={tw`flex h-screen`}>
      <div class={tw`m-auto text-center`}>
        <h1 class={tw`text-6xl mb-4`}>{statusCode}</h1>
        <p>{message || 'Sorry, an error occurred'}</p>
      </div>
    </div>
  );
}
