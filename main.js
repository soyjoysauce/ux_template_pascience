// written by Soyoung Bae 3/29/2018

$(document).ready(function() {
  let carousel = new Carousel();
  $(this.carousel).bind(this);

  console.log("Carousel:", carousel);
  console.log("init and things are made");
});

class Carousel {
  constructor() {
    this.imageArray = [
      "img/health-1.jpg",
      "img/health-2.jpg",
      "img/health-3.jpg",
      "img/health-4.jpg"
    ];
    this.makeSlides();
    this.carousel();
    // this.newsEvents();
  }
  carousel() {
    let box = document.querySelector(".carousel_box");
    let next = box.querySelector(".next");
    let prev = box.querySelector(".prev");
    let img_slide = box.querySelectorAll(".content li");

    let counter = 0;
    let amount = img_slide.length;
    let current = img_slide[0];
    //add the class of “active” to box to trigger it's CSS
    box.classList.add("active");

    //function takes you thru the array by removing and adding class to selected DOM element
    //parameter(direction):defines if we should go backwards(negative) or forwards in the carousel
    function navigate_carousel(direction) {
      //hides the current one for the new
      current.classList.remove("current");
      // increments the counter in the new direction
      counter = counter + direction;
      //
      if (direction === -1 && counter < 0) {
        counter = amount - 1;
      }
      //make sure the counter does not go beyond the available
      if (direction === 1 && !img_slide[counter]) {
        counter = 0;
      }
      current = img_slide[counter];
      current.classList.add("current");
    }
    //adds a event listener to the navigation buttons
    next.addEventListener("click", function(event) {
      navigate_carousel(1);
    });
    prev.addEventListener("click", function(event) {
      navigate_carousel(-1);
    });
    //show the first carousel item by calling navigate with 0 as the value
    navigate_carousel(0);

    // function setInterval(direction) {
    //   console.log("hellow");
    //   current.classList.remove("current");
    //   // increments the counter in the new direction
    //   counter = counter + direction;
    //   //
    //   if (direction === -1 && counter < 0) {
    //     counter = amount - 1;
    //   }
    //   //make sure the counter does not go beyond the available
    //   if (direction === 1 && !img_slide[counter]) {
    //     counter = 0;
    //   }
    //   current = img_slide[counter];
    //   current.classList.add("current");
    // }
    // 2000;

    // box.addEventListener("load", function(event) {
    //   setInterval();
    // });

    // setInterval(0);
  }

  makeSlides() {
    let image_array = this.imageArray;
    let slide_slot_array = [];

    image_array.map(function(image) {
      let my_new_Li = {
        info: $("<li>", {
          id: "my_new_Li"
        })
      };

      let my_new_Img = {
        info: $("<img>", {
          src: image,
          class: "my_new_Img",
          alt: "fullslide"
        })
      };

      $("#new_carousel").prepend(my_new_Li.info.clone());
      $("#my_new_Li").append(my_new_Img.info.clone());
    });
  }

  newsEvents() {
    var newsDrop = document
      .getElementById("news_drop_down")
      .addEventListener("onclick", contentDrop(), false);

    function contentDrop() {
      console.log("hi");
      let x = document.getElementById("news_drop_content");
      if (x.className === "w3-dropdown-content") {
        x.className += "w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }

    // let news_event = document.querySelector(".news_events");
    // console.log("news_event", news_event);
    // newsDrop.addEventListener("click", function() {
    //   console.log('hi');
    // });
  }

  //   carousel_timer(){

  //     let time_count =(counter) => {
  //         let timer = 0;
  //         return function(){return counter +=1; }
  //     };

  //     let promise = new PromiseTimeOut(function(resolve, reject) {
  //         // do a thing, possibly async, then…

  //         if (/* everything turned out fine */) {
  //           resolve("Stuff worked!");
  //         }
  //         else {
  //           reject(Error("It broke"));
  //         }
  //       });

  //     }
}
