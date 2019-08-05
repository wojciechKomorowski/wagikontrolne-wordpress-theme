<?php get_header() ?>

<?php 
	if ( have_posts() ):
	    while ( have_posts() ) : the_post(); ?>
			<div class="header__container">
				<h1 class="header__main-title"><?php the_title(); ?></h1>
			</div>
			<div class="content">
				<div class="content__container">
					<?php the_content(); ?>
				</div>
			</div>
  <?php endwhile;
	endif; ?>

<?php get_footer() ?>