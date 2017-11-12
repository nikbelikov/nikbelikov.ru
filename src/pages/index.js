import React from 'react';
import styles from './index.module.css';

const YEAR = '2017';

const SOCIAL = [
  { name: 'Twitter', url: 'https://twitter.com/_nikbelikov' },
  { name: 'Instagram', url: 'http://instagram.com/nikbelikov' },
  { name: 'Medium', url: 'https://medium.com/@nikbelikov' },
  { name: 'Youtube', url: 'https://www.youtube.com/c/НиколайБеликов' },
];

const OTHER = [
  { name: 'Code some sh*t', url: 'https://github.com/nikbelikov' },
  { name: 'Write stories', url: 'http://proza.ru/avtor/nikbelikov' },
  { name: 'Read books', url: 'http://buknotes.ru' },
];

const PROJECTS = [
  { name: 'watchcards.ru', url: 'http://watchcards.ru/' },
  { name: 'passgenius', url: 'http://nikbelikov.ru/passgenius' },
  { name: 'floc extension', url: 'https://goo.gl/3xt6MV' },
  { name: '20th century', url: 'https://github.com/nikbelikov/20th-century' },
];

const renderLinkItem = (collection) => (
  <ul className={styles.list}>
    {collection.map(item => {
      return (
        <li key={item.name}><a href={item.url} rel="noopener noreferrer" target="_blank">{item.name}</a></li>
      );
    })}
  </ul>
);

const IndexPage = () => (
  <div className={styles.content}>
    <h1 className={styles.title}>Front<span className={styles.titleEnd}>end</span> developer</h1>

    <section>
      <h2>About me:</h2>
      <section>
        <h3 className={styles.listTitle}>You can find me at:</h3>
        {renderLinkItem(SOCIAL)}
      </section>
      <section>
        <h3 className={styles.listTitle}>I also like to:</h3>
        {renderLinkItem(OTHER)}
      </section>
      <section>
        <h3 className={styles.listTitle}>My projects:</h3>
        {renderLinkItem(PROJECTS)}
      </section>
    </section>
    <div className={styles.copyright}>{YEAR} &copy; nikbelikov.ru</div>
  </div>
);

export default IndexPage
