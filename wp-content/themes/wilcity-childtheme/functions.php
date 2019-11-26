<?php

add_action('wp_enqueue_scripts', 'wilcityChildThemeScripts', 9999);

function wilcityChildThemeScripts(){
	$oTheme = wp_get_theme();
	wp_enqueue_style('wilcity-parent', get_template_directory_uri() . '/style.css', array(), $oTheme->get( 'Version' ));
	wp_enqueue_script('wilcity-child', get_stylesheet_directory_uri() . '/script.js', array('jquery'), '1.0', true);
//	 wp_enqueue_script('magnific-translation', get_stylesheet_directory_uri() . '/vendor/magnific-translation.js', array('jquery', 'magnific-popup'), '1.0', true);
	// wp_localize_script('jquery-migrate', 'WILCITY_SELECT2_LENG', 'vi');
};