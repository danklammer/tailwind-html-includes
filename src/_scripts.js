// encapsulate in IFFE so we don't polute global scope
(function(){
  
  // Page loaded for you in [X] Seconds
  window.addEventListener("load", loadTime, false);

  function loadTime() {
    var now = new Date().getTime();
    var page_load_time = (now - performance.timing.navigationStart) / 1000;
    page_load_time = +page_load_time.toFixed(2);
    document.getElementById('loadtime').innerHTML = page_load_time;
  }

})();