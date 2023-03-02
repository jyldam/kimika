import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/app.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  },
  {rel: 'stylesheet', href: styles},
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Kimika Detailing',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="ru">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen font-roboto bg-black text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
