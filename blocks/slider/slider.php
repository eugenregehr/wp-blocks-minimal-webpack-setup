<?php

$id = 'slider-' . $block["id"];

$className = 'slider splide';
if( !empty($block["className"]) ) {
    $className .= ' ' . $block["className"];
}
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">

  <?php if( have_rows('slider') ): ?>
      
            <div class="splide__track">
                <ul class="splide__list">
                     <?php while( have_rows('slider') ): the_row(); 
                        $image = get_sub_field('image');
                        ?>
                    <li class="splide__slide">
                        <?php echo wp_get_attachment_image( $image['id'], 'full' ); ?>
                    </li>
                     <?php endwhile; ?>
                </ul>
            </div>
            </div>
     
  <?php endif; ?>

</div>