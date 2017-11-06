import React from 'react';
import styles from './index.module.css';

const IndexPage = () => (
  <div className={styles.content}>
    <h1 className={styles.title}>Front <span>end</span></h1>
    <ul className={styles.menu}>
      <li>My skills</li>
      <li>About me</li>
    </ul>

    <section className={styles.skills}>
      <h2>My skills:</h2>
      <ul className={styles.skillsList}>
        <li>HTML5 Jade Haml Markdown Retina SVG Canvas ARIA Validation</li>
        <li>CSS3 MCSS BEM Flexbox Animation LESS Sass Scss Postcss Autoprefixer</li>
        <li>ES2015 jQuery Grunt Gulp React ReactNative Redux ESLint Babel Browserify</li>
        <li>Git (GitFlow) GitHub npm yarn</li>
        <li>Responsive iOS Android Bootstrap Foundation Mobile-First Emails</li>
        <li>MacOS WebStorm Emmet Alfred</li>
        <li>Adobe Photoshop CC & Sketch</li>
      </ul>
    </section>

    <section>
      <h2>About me:</h2>
      <p>
        You can find me at:
        <ul>
          <li><a href="">Twitter</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Medium</a></li>
          <li><a href="">Youtube</a></li>
        </ul>
      </p>
      <p>
        I also like to:
        <ul>
          <li><a href="">Code some sh*t</a></li>
          <li><a href="">Write stories</a></li>
          <li><a href="">Read books</a></li>
        </ul>
      </p>
      <p>
        My projects:
        <ul>
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
