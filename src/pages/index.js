import React, { Component } from 'react';
import { TweenLite } from 'gsap';
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

export default class IndexPage extends Component {
  componentDidMount() {
    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {x: width / 2, y: height / 2};

      largeHeader = document.querySelector('body');
      largeHeader.style.height = height + 'px';

      canvas = document.getElementById('bg');
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // create points
      points = [];
      for (var x = 0; x < width; x = x + width / 20) {
        for (var y = 0; y < height; y = y + height / 20) {
          var px = x + Math.random() * width / 20;
          var py = y + Math.random() * height / 20;
          var p = {x: px, originX: px, y: py, originY: py};
          points.push(p);
        }
      }

      // for each point find the 5 closest points
      for (var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];
        for (var j = 0; j < points.length; j++) {
          var p2 = points[j];
          if (!(p1 == p2)) {
            var placed = false;
            for (var l = 0; l < 5; l++) {
              if (!placed) {
                if (closest[l] == undefined) {
                  closest[l] = p2;
                  placed = true;
                }
              }
            }

            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // assign a circle to each point
      for (var point in points) {
        points[point].circle = new Circle(points[point], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
      }
    }

    // Event handling
    function addListeners() {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
      var posx = 0;
      var posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      }
      else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      animateHeader = document.body.scrollTop <= height;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + 'px';
      canvas.width = width;
      canvas.height = height;
    }

    // animation
    function initAnimation() {
      animate();
      for (var i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (var i in points) {
          // detect points in range
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      TweenLite.to(p, 1 + Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
        onComplete: function () {
          shiftPoint(p);
        }
      });
    }

    // Canvas manipulation
    function drawLines(p) {
      if (!p.active) return;
      for (var i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(255,255,255,' + p.active + ')';
        ctx.stroke();
      }
    }

    function Circle(pos, rad, color) {
      var _this = this;

      // constructor
      (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(255,255,255,' + _this.active + ')';
        ctx.fill();
      };
    }

    // Util
    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
  }

  render() {
    return (
      <div className={styles.content}>
        <canvas id="bg" className={styles.canvas} />

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
  }
}
