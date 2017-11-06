import React from 'react';
import styles from './index.module.css';

const IndexPage = () => (
  <div className={styles.content}>
    <h1 className={styles.title}>Front<span className={styles.titleEnd}>end</span> developer</h1>
    <ul className={styles.menu}>
      <li>My skills</li>
      <li>About me</li>
    </ul>

    <section className={styles.skills}>
      <h2>My skills:</h2>
      <ul className={styles.list}>
        <li>ES2015 jQuery Grunt Gulp React ReactNative Redux ESLint Babel Browserify</li>
        <li>CSS3 BEM Flexbox Grids LESS Sass Scss Postcss CssModules Autoprefixer</li>
        <li>Responsive iOS Android Bootstrap Foundation Mobile-First Emails</li>
        <li>HTML5 Jade Haml Markdown Retina SVG Canvas ARIA Validation</li>
        <li>Git (GitFlow) GitHub npm yarn MacOS WebStorm Emmet Alfred</li>
        <li>Adobe Photoshop CC & Sketch</li>
      </ul>
    </section>

    <section>
      <h2>About me:</h2>
      <p>
        <h3 className={styles.listTitle}>You can find me at:</h3>
        <ul className={styles.list}>
          <li><a href="">Twitter</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Medium</a></li>
          <li><a href="">Youtube</a></li>
        </ul>
      </p>
      <p>
        <h3 className={styles.listTitle}>I also like to:</h3>
        <ul className={styles.list}>
          <li><a href="">Code some sh*t</a></li>
          <li><a href="">Write stories</a></li>
          <li><a href="">Read books</a></li>
        </ul>
      </p>
      <p>
        <h3 className={styles.listTitle}>My projects:</h3>
        <ul className={styles.list}>
          <li><a href="">watchcards.ru</a></li>
          <li><a href="">passgenius</a></li>
          <li><a href="">floc extension</a></li>
          <li><a href="">20th century</a></li>
        </ul>
      </p>
    </section>
    <div className={styles.copyright}>2017 &copy; nikbelikov.ru</div>
  </div>
);

export default IndexPage
