import { renderToString } from 'react-dom/server';
import App, { type Locale } from './App';

export function render(locale: Locale, page: 'portfolio' | 'plain' | 'notFound') {
  return renderToString(<App locale={locale} page={page} />);
}
