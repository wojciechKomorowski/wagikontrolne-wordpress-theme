<!doctype html>

<html lang="pl-PL">
	<head>
		<meta charset="utf-8">

		<title>Wagi Kontrolne</title>
		<meta name="description" content="Wagi Kontrolne">
		
		<?php wp_head() ?>
		<meta name="viewport" content="width=device-width">
	</head>

		<body <?php body_class() ?>>
			<section class="topbar">
				<div class="topbar__container">
					<div class="topbar__contact-detail">
						<i class="icon-location"></i>
						<p class="contact-detail__adress">ul. Św. Rocha&nbsp;4, 62-052 Komorniki Poznań, woj. wielkopolskie</p>
					</div>
					<div class="topbar__contact-detail">
						<i class="icon-phone"></i>
						<p class="contact-detail__phone"><a href="tel:+48502673405">502&nbsp;673&nbsp;405</a> / <a href="tel:+48502673406">502&nbsp;673&nbsp;406</a></p>
					</div>
					<div class="topbar__contact-detail">
						<i class="icon-mail-alt"></i>
						<p class="contact-detail__mail"><a href="mailto:info@cnc-technica.com">info@cnc-technica.com</a></p>
					</div>
				</div>	
			</section>
			<nav class="navigation">
				<div class="navigation__logo">
					<a href="/"><img src="<?php $_SERVER['HTTP_HOST'] ?>/wp-content/uploads/2019/07/logo.png" alt="Wagi Kontrolne"></a>
				</div>
				<div class="navigation__hamburger">
				    <div class="hamburger__line"></div>
				    <div class="hamburger__line"></div>
				    <div class="hamburger__line"></div>
				</div>
				<?php wp_nav_menu( array('theme_location'=>'primary') ) ?>				
			</nav>
			<?php if (!is_front_page()) : ?>
				<section class="breadcrumbs__container">
						<?php custom_breadcrumbs(); ?>
				</section>
			<?php endif; ?>