import React, { Component } from 'react';
import canvasBg from '../shared/canvasBg';
import styles from './index.module.css';

const YEAR = '2018';

const SOCIAL = [
  { name: 'Instagram', url: 'http://instagram.com/nikbelikov' },
  { name: 'Telegram', url: 'http://t.me/nikbelikov' },
  { name: 'Medium', url: 'https://medium.com/@nikbelikov' },
  { name: 'Twitter', url: 'https://twitter.com/_nikbelikov' },
  { name: 'Mail', url: 'mailto:nikmail88@gmail.com' },
];

const OTHER = [
  { name: 'Code some sh*t', url: 'https://github.com/nikbelikov' },
  { name: 'Write stories', url: 'http://proza.ru/avtor/nikbelikov' },
  { name: 'Play guitar', url: 'https://goo.gl/HGf5gj' },
];

const PROJECTS = [
  { name: 'Floc extension', url: 'https://goo.gl/3xt6MV' },
  { name: 'Watchcards.ru', url: 'http://watchcards.ru/' },
  { name: '20th century', url: 'https://github.com/nikbelikov/20th-century' },
  { name: 'Buknotes.ru', url: 'http://buknotes.ru' },
  { name: 'Passgenius', url: 'http://nikbelikov.ru/passgenius' },
];

const renderLinks = (collection) => (
  <ul className={styles.list}>
    {collection.map(item => {
      return (
        <li key={item.name}>
          <a
            href={item.url}
            rel="noopener noreferrer"
            target={item.name === 'Mail' ? '' : '_blank'}
          >
            {item.name}
          </a>
        </li>
      );
    })}
  </ul>
);

export default class IndexPage extends Component {
  componentDidMount() {
    canvasBg();
  }

  render() {
    return (
      <section className={styles.content}>
        <canvas id="bg" className={styles.canvas} />

        <h1 className={styles.title}>Frontend developer</h1>

        <div className={styles.blocks}>
          <section>
            <h3 className={styles.listTitle}>You can find me at:</h3>
            {renderLinks(SOCIAL)}
          </section>
          <section>
            <h3 className={styles.listTitle}>I also like to:</h3>
            {renderLinks(OTHER)}
          </section>
          <section>
            <h3 className={styles.listTitle}>My projects:</h3>
            {renderLinks(PROJECTS)}
          </section>
        </div>
        <div className={styles.copyright} aria-hidden="true">{YEAR} &copy; nikbelikov.ru</div>
      </section>
    );
  }
}
