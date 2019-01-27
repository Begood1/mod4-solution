// NOTE! The steps in this file are basically identical to the ones yo
(function(window) {
     var byeSpeaker = {};
     var speakWord = "Good Bye";
     byeSpeaker.speak = function(name){
      console.log(speakWord +" " + name);
     };
     window.byeSpeaker = byeSpeaker;
    })(window);
    

    