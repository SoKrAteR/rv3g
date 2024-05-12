
if (ScrollTrigger.isTouch !==1){
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })
    
    gsap.fromTo('.header-tittle', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.header-io',
            start: 'center',
            end: '700',
            scrub: true
        }
    })
    
    gsap.fromTo('.plot-text', { opacity: 0, x: -200 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.plot',
            start: '-800',
            end: '-100',
            scrub: true
        }
    })
    
    gsap.fromTo('.cart', { opacity: 0, x: -100 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.carts',
            start: '-800',
            end: '-100',
            scrub: true
        }
    })
    
    
    gsap.fromTo('.cart-second', { opacity: 0, x: 100 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.carts',
            start: '-800',
            end: '-100',
            scrub: true
        }
    })
    
    
    
    gsap.fromTo('.plot-img', { opacity: 0, x: 200 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.plot',
            start: '-800',
            end: '-100',
            scrub: true
        }
    })
    
    gsap.fromTo('.quote-img', { opacity: 0, x: -250 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.quote',
            start: '-800',
            end: '-100',
            scrub: true
        }
    })
    
    gsap.fromTo('.quote-am', { opacity: 0, x: -200 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.quote',
            start: '-250',
            end: '0',
            scrub: true
        }
    })
    
    gsap.fromTo('.quote-text', { opacity: 0, x: 250 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.quote',
            start: '-500',
            end: '-100',
            scrub: true
        }
    })
    
    gsap.fromTo('.am-text', { opacity: 0, x: 250 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.am-img',
            start: '-450',
            end: '0',
            scrub: true
        }
    })
    
    gsap.fromTo('.swiper-slide', { opacity: 0, x: -250 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.am',
            start: '-800',
            end: '-100',
            scrub: true
        }
    })

}


const swiperText = new Swiper('.swiper', {
	speed: 1600,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	}
})
