window.onload = function(){

    /* CLASSES */

    /* CLASSE RESPONSAVEL POR GERENCIAR O MOVIMENTO DO SLIDER */
    class Slider{
        constructor(slider, btnPrev, btnNext){
            this.slider = document.querySelectorAll(slider);
            this.btnPrev = document.querySelector(btnPrev);
            this.btnNext = document.querySelector(btnNext); 

            this.currentSlide = 0;

            this.nextSlider = this.nextSlider.bind(this);
            this.prevSlider = this.prevSlider.bind(this);
        }
        hideSlider(){
            this.slider.forEach(item => {
                (item.classList.contains('on'))? item.classList.remove('on'): true;
            });
        }
        showSlider(){
            console.log(this.currentSlide);
            this.slider[this.currentSlide].classList.add('on');
        }
        nextSlider(){
            this.hideSlider();
            (this.currentSlide < 0 || this.currentSlide >= this.slider.length-1)? this.currentSlide = 0 : this.currentSlide++;
            this.showSlider();
        }
        prevSlider(){
            this.hideSlider();
            (this.currentSlide <= 0 || this.currentSlide > this.slider.length-1)?this.currentSlide = this.slider.length-1 : this.currentSlide--;
            this.showSlider();
        }
        init(){
            this.btnNext.addEventListener('click', this.nextSlider);
            this.btnPrev.addEventListener('click', this.prevSlider);
        }
    }

    
    /* DECLARAÇÃO DA CLASSE ANIMATION */
    Slider = new Slider(
        '.slider',
        '#prev-button',
        '#next-button'
    );
    Slider.init();

    /* FIM DECLARAÇÕES */
}/* FIM ONLOAD */
