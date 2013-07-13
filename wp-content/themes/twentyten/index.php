<?php get_header(); ?>

		<section class="main-container contacts-container">
			<section id="contacts">
				<div class="close">&times;</div>
				<div class="content">
					<div class="block">
						<h1>Написать мне</h1>
						<?php echo do_shortcode( '[contact-form-7 id="32" title="Написать мне"]' ); ?>
					</div>
					<div class="block">
						<h1>Контакты</h1>
						<iframe width="547" height="349" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.ru/?ie=UTF8&amp;t=m&amp;ll=54.213861,48.405762&amp;spn=4.484577,11.99707&amp;z=6&amp;output=embed"></iframe>
					</div>
				</div>
				<hr>
				<div class="copyright"><? echo date('Y'); ?> (c) - nikbelikov.ru</div>
			</section>
		</section>

		<section id="wrapper" class="bg01">
			<section class="main-container">
				<header id="header">
					<a href="/" id="sitename">nikbelikov.ru</a>

					<nav>
						<ul>
							<li><span id="menu-portfolio">Портфолио</span>
							<?/*<li><span id="menu-blog">Блог</span>*/?>
							<li><span id="menu-contacts">Контакты</span>
						</ul>
					</nav>

					<div id="icon-refresh" class="icon-refresh"></div>
				</header><!-- #header-->

				<section id="content">
					<i id="icon-angle-down" class="icon-angle-down"></i>
					<div id="frontend" class="frontend"><span>Front.</span>End</div>
					<div class="vert-line white"></div>
				</section><!-- #content-->
			</section>
		</section><!-- #wrapper -->

		<section class="main-container portfolio-container">
			<section id="portfolio">
				<div class="close">&times;</div>
				<div class="content">

					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
						<div class="block">
							<div class="title"><?php the_title(); ?></div>
							<div class="desc"><?php the_content(); ?></div>
							<a href="<?php echo get_post(get_post_thumbnail_id())->post_excerpt; ?>" target="_blank"><?php the_post_thumbnail('medium'); ?></a>
						</div>
					<?php endwhile;?>
					<?php endif; ?>

				</div>
				<hr>
				<div class="copyright"><? echo date('Y'); ?> (c) - nikbelikov.ru</div>
			</section>
		</section>

		<img id="hidden-img" src="img/summer/bg1.jpg" alt="hidden-img">

<?php get_footer(); ?>