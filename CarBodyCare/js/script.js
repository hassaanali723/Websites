window.onscroll = function() {
    var el = document.getElementsByClassName('header')[0];
    var className = 'small';
    if (el.classList) {
      if (window.scrollY > 10)
        el.classList.add(className);
      else
        el.classList.remove(className);
    }
  };

  document.getElementById('toggle').addEventListener('click',function(){
      let d = document.getElementById('menu');
      console.log(d.style.display);
       if (d.offsetParent === null)
          d.style.display = 'block';
       else{
          console.log(d.offsetParent)
          d.style.display = 'none';
       }
      
  })