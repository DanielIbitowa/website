/*menu-toggle jQuery code */
$(".menu-toggle").click(function () {
    $(".site-nav").toggleClass("site-nav--open", 500);
    $(this).toggleClass("open");
  });
  /* Add Event Listener to make the Menu close once a link has been clicked */ 
  $( '.site-nav a' ).on("click", function(){
    $(".site-nav").toggleClass("site-nav--open", 500); 
    $(".menu-toggle").toggleClass("open"); 
  });
  
          
  /*AOS */
  AOS.init();
  
  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
      disable: 'false', // accepts following value phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  
  /* Reviews animation */
  $('#owl-carousel').owlCarousel({
      loop: true,
    autoplay:true,
    autoplayHoverPause:true, 
    smartSpeed: 2000,
      margin: 100,
     dots: true,
      items: 1,
    responsive : {
           0 : {
         items: 1
            },
        800 : {
      items: 2
      },
      1200 : {
      items: 3
      },
  }
  });
