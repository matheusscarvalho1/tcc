// SLIDER 
$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000
 
  });

  const btnHp = document.querySelector("#btnHp");
    btnHp.addEventListener ("click", irHomepage);
  