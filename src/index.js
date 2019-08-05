import './sass/main.scss';
let $ = require('jquery');
require('slick-carousel');
import { addBackToTop } from 'vanilla-back-to-top';
import GLightbox from 'glightbox';

$(document).ready(function() {
	
	let mobile = window.matchMedia("(max-width: 720px)");

	function changeDisplay(mobile) {
		let menu = $('.menu-main-navigation-container');
		let mobileSubMenu = $('.menu > .menu-item').has('.sub-menu');
		let rollArrow =  $('<span class="roll-arrow"><i class="icon-down-open"></i></span>');
		
		if (!mobile.matches) {
			menu.addClass('show-element');
			mobileSubMenu.find('.roll-arrow').remove();
			mobileSubMenu.find('.sub-menu').removeClass('show-element');
		} else {
			menu.removeClass('show-element');
			rollArrow.insertAfter(mobileSubMenu.find('> a'));
			openMobileSubMenu();
		}
    }
	
	function highlightCurrentPage() {
		if ($('.menu > .menu-item').hasClass('current_page_item')) {
			let currentPageItem = $('.menu > .current_page_item')
			currentPageItem.css('background-color', '#005d8c');
			currentPageItem.find('> a').css('color', 'white');
		} else if ($('.sub-menu > .menu-item').hasClass('current_page_item')) {
			$('.sub-menu > .current_page_item').find('> a').css('color', 'white');
		} else if ($('body').hasClass('home')) {
			let menuItem15 = $('.menu > .menu-item-15');
			menuItem15.css('background-color', '#005d8c');
			menuItem15.find('> a').css('color', 'white');
		}
	}
	

	function openMobileMenu() {
		let mobileMenu = $('.menu-main-navigation-container');
		let hamburgerButton = $('.navigation__hamburger');

		hamburgerButton.on('click', function() {
			if (mobileMenu.css('display') === 'none') mobileMenu.addClass('show-element');
			else mobileMenu.removeClass('show-element');
		});

	}

	function openMobileSubMenu() {
		let rollArrow = $('.menu > .menu-item .roll-arrow');
		
		rollArrow.on('click', function() {
			let mobileSubMenu = rollArrow.next('.sub-menu');

			if (mobileSubMenu.css('display') === 'none') mobileSubMenu.addClass('show-element');
			else mobileSubMenu.removeClass('show-element');
		});
	}

	changeDisplay(mobile)
	mobile.addListener(changeDisplay);
	highlightCurrentPage();
	openMobileMenu();
	
	// Back to top function call
	addBackToTop({
		diameter: 56,
		backgroundColor: '#005d8c',
		textColor: '#fff'
	});
	
	// Slick carousel - header
	$('.header__slider').slick({
		initialSlide: 0,
		infinite: true,
		speed: 800,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 7000,
		responsive: [
			{
			    breakpoint: 720,
			    settings: {
				    arrows: false,
			    }
			},
		]
	});
	
	// Slick carousel - cooperation section
	$('.main-cooperation__slider').slick({
	    infinite: true,
		speed: 800,
	    slidesToShow: 5,
	    slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 7000,
		responsive: [
			{
			    breakpoint: 720,
			    settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
				}
			},
		]
	});
	
	// Lightbox Galleries
	let myLightbox = GLightbox({
		selector: 'glightboxGallery',
	});
});