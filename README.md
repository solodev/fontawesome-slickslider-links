# fontawesome-slickslider-links
Getting users quickly to their end destination can be tricky; with strategic icons and simple text, however, you can provide a means for users to quickly find what they need.

## Tutorial
For detailed instruction's, view Solodev's [How to Combine FontAwesome with a Slider to Create Quick Links](https://www.solodev.com/blog/web-design/how-to-combine-fontawesome-with-a-slider-to-create-quick-links.stml) article.

## Demo
  		  
Try out a working example on [JSFiddle](https://jsfiddle.net/solodev/mcyhk6wd/3/).

## HTML

The tutorial contains the following basic HTML markup.

```
<section class="section_quick_link">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Quick Links</h2>
        <div class="carousel" data-arrows="true" data-autoplay="true" data-items="5" data-items-sm="3" data-items-xs="1">
          <div class="carousel-item">
            <a aria-label="Locations" href="#" target="_blank"> <i class="fas fa-tripadvisor"></i></i> <span>Locations</span>
            </a>
          </div>
          <!--.carousel-item-->
          <div class="carousel-item">
            <a aria-label="Support" href="#"> <i class="fas fa-firefox"></i> <span>Support</span>
            </a>
          </div>
          <!--.carousel-item-->
          <div class="carousel-item">
            <a aria-label="Training" href="#"> <i class="fas fa-paw"></i> <span>Training</span>
            </a>
          </div>
          <!--.carousel-item-->
          <div class="carousel-item">
            <a aria-label="News" href="#"> <i class="far fa-twitter"></i> <span>News</span>
            </a>
          </div>
          <!--.carousel-item-->
          <div class="carousel-item">
            <a aria-label="Troubleshooting" href="#"> <i class="fas fa-bug"></i> <span>Troubleshooting</span>
            </a>
          </div>
          <!--.carousel-item-->
          <div class="carousel-item">
            <a aria-label="Careers" href="#"> <i class="fas fa-linux"></i> <span>Careers</span>
            </a>
          </div>
          <!--.carousel-item-->
          <div class="carousel-item">
            <a aria-label="Contact" href="#"> <i class="far fa-github-alt"></i> <span>Contact</span>
            </a>
          </div>
          <!--.carousel-item-->
          <!--.carousel-item-->
        </div>
        <!--.carousel-->
      </div>
    </div>
    <!--.row-->
  </div>
  <!--.container-->
  <script>
    jQuery(document).ready(function($) {
          $('.carousel').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

  </script>

```

## CSS
All required CSS is contained with style.css

## External Resources
This tutorial includes the following third party resources.

```
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```
