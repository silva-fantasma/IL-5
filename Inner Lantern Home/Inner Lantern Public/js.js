  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  let container = document.querySelector('.container'); 

// When the user scrolls down 80px from the top of the document, resize the navbar
container.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (container.scrollTop > 80) {
      // document.getElementById("navbar").style.padding = "0px 0px 0px";
      document.getElementById("navbar").style.backgroundColor = "#f0a53c";

      document.getElementById("logo").style.fontSize = "2rem";
      document.getElementById("link").style.fontSize = "0.85vw";
      document.getElementById("link1").style.fontSize = "0.85vw";
      document.getElementById("link2").style.fontSize = "0.85vw";
      document.getElementById("link3").style.fontSize = "0.85vw";
      document.getElementById("link4").style.fontSize = "0.85vw";
      document.getElementById("link5").style.fontSize = "1vw";

      document.getElementById("logo").style.marginInline = "1.5vw";
      document.getElementById("link").style.marginInline =  "1.5vw";
      document.getElementById("link1").style.marginInline =  "1.5vw";
      document.getElementById("link2").style.marginInline = "1.5vw";
      document.getElementById("link3").style.marginInline = "1.5vw";
      document.getElementById("link4").style.marginInline = "1.5vw";
      document.getElementById("link5").style.marginInline = "1.5vw";

      // document.getElementById("logo-image").style.width = "1.8vw";

      document.getElementById("logo-space").style.color = "white";
      document.getElementById("logo").style.color = "transparent";

    } else {
      // document.getElementById("navbar").style.padding = "0px 0px 0px";

      document.getElementById("navbar").style.backgroundColor = "transparent";

      document.getElementById("logo").style.fontSize = "2.3vw";
      document.getElementById("link").style.fontSize = "1.1vw";
      document.getElementById("link1").style.fontSize = "1.1vw";
      document.getElementById("link2").style.fontSize = "1.1vw";
      document.getElementById("link3").style.fontSize = "1.1vw";
      document.getElementById("link4").style.fontSize = "1.1vw";
      document.getElementById("link5").style.fontSize = "1.1vw";

      document.getElementById("logo").style.marginInline = "3.8vw";
      document.getElementById("link").style.marginInline = "3.8vw";
      document.getElementById("link1").style.marginInline = "3.8vw";
      document.getElementById("link2").style.marginInline = "3.8vw";
      document.getElementById("link3").style.marginInline = "3.8vw";
      document.getElementById("link4").style.marginInline = "3.8vw";
      document.getElementById("link5").style.marginInline = "3.8vw";

      // document.getElementById("logo-image").style.width = "3vw"

      document.getElementById("logo-space").style.color = "transparent";
      document.getElementById("logo").style.color = "white";
    }
  }
