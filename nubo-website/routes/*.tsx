/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import ErrorPage from '../components/pages/ErrorPage.tsx';

export default function Page(props: PageProps) {
  console.log(props.url);

  return <ErrorPage statusCode={404} message="Page not found" />;
}
