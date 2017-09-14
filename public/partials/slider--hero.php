<div class="owl-carousel is-shrinkable" data-carousel="hero">
  <?php $i = 1; while ($i <= 3):?>
     <div class="slider__item">
        <a href="#">
            <picture>
                <source srcset="http://placehold.it/1440x600" media="(min-width: 1025px)">
                <source srcset="http://placehold.it/600x250" media="(min-width: 600px)">
                <img srcset="http://placehold.it/600x250" alt="Banner" class="slider__image hero__image">
            </picture>

            <div class="hero__outer">
               <div class="wrapper hero-contents-container">
                   <div class="hero__contents">
                       <h1 class="hero__title bm--lsu">Hero Title</h1>
                       <div class="hero__text med-up">Hero Contents</div>
                   </div>
               </div>
            </div>
        </a>
     </div>
     <?php $i++; endwhile ?>
 </div>

