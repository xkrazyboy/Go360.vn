<?php
global $post, $wiloke;
$size = apply_filters('wilcity/single-listing/image-cover-size', 'large');
$coverImg = \WilokeListingTools\Framework\Helpers\GetSettings::getCoverImage($post->ID, $size); 
?>


<header class="listing-detail_header__18Cfs">
	
<a-scene loading-screen="enabled: true;" embedded="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="">
	<a-entity camera="" look-controls="reverseMouseDrag: false" position="" rotation=""></a-entity>
	<a-sky src="<?php echo esc_url($coverImg)?>"  material="" geometry="" scale="">
    </a-sky>
	<canvas class="a-canvas a-grab-cursor" data-aframe-canvas="false" width="600" height="300" style=""></canvas>
	<a-entity light="" data-aframe-default-light="" aframe-injected="" ></a-entity>
	<a-entity light="" position="" data-aframe-default-light="" aframe-injected=""></a-entity>
</a-scene>
<?php if ( isset($wiloke->aThemeOptions['listing_overlay_color']['rgba']) && !empty($wiloke->aThemeOptions['listing_overlay_color']['rgba']) ) : ?>
		<div class="wil-overlay" style="background-color: <?php echo esc_attr($wiloke->aThemeOptions['listing_overlay_color']['rgba']); ?>"></div>
	<?php endif; ?>


</header>