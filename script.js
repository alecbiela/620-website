window.onload = (function(){
    'use strict';

    /** 
     * https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165
     */
    const links = document.querySelectorAll("#hifi a.page-anchor");

    for (const link of links) {
      link.addEventListener("click", clickHandler);
    }
    
    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;
    
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    }

    const transcriptToggle = document.getElementById('transcript_toggle');
    const transcriptdd = document.getElementById('transcript_dropdown');
    if(transcriptToggle !== null && transcriptdd !== null){
        transcriptToggle.addEventListener('click', function(){
            if(transcriptdd.className.indexOf('d-none') >= 0){
                transcriptToggle.setAttribute('aria-expanded', 'true');
                transcriptdd.className = 'd-block';
            }else{
                transcriptToggle.setAttribute('aria-expanded', 'false');
                transcriptdd.className = 'd-none';
            }
        });
    }
})();