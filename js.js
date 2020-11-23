
        function introSeeMore(){
            document.getElementById('more').style.display='block';
            document.getElementById('learnMore').style.display='none';
            document.getElementsByTagName('body')[0].style.height = "calc(" + document.getElementById('intro').offsetHeight + "px + 200px)";
        }

        function introSeeLess(){
            document.getElementById('more').style.display='none';
            document.getElementById('learnMore').style.display='block';
            document.getElementsByTagName('body')[0].style.height = "100%";
        
        }

        function display(show){
            var array = ['intro', 'experiences', 'contact'/**, 'projects'*/];
            array.forEach(function(i){
                if(i == show){
                    if(i == 'experiences'){
                        document.getElementById(show).style.display='flex';
                    }else{
                        document.getElementById(show).style.display='block';    
                    }

                }else{
                    if(show != 'contact'){
                        document.getElementById(i).style.display='none';
                    }
                }
            });
        }

        function setupTypewriter(t) {
        var HTML = t.innerHTML;

        t.innerHTML = "";

        var cursorPosition = 0,
            tag = "",
            writingTag = false,
            tagOpen = false,
            typeSpeed = 30,
        tempTypeSpeed = 0;

        var type = function() {
        
            if (writingTag === true) {
                tag += HTML[cursorPosition];
            }

            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                }
                else {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                }
                t.innerHTML += HTML[cursorPosition];
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                writingTag = false;
                if (tagOpen) {
                    var newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }

            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }

        };

        return {
            type: type
        };
    }
    
    // Run typewriter affect
    setupTypewriter(document.getElementById('typewriter')).type();
    
    // Wait before button fade in
    setTimeout(function(){
        document.getElementById('wait').classList.add('fadeIn'); 
    }, 6000);
    setTimeout(function(){
        document.getElementById('wait_phone').classList.add('fadeInPhone'); 
    }, 6000);

function autoSize(){
    // Get flip card heights
    var cards = document.getElementsByClassName('flip-card');
    for(var i = 0; i < cards.length; i++){
        console.log(i);
        var front = cards[i].firstElementChild.firstElementChild;
        console.log("front: "+front.offsetHeight);
        var back = cards[i].firstElementChild.lastElementChild;
        console.log("back: "+back.offsetHeight);
        if(back != null){
            if(front.offsetHeight > back.offsetHeight){
                console.log('front bigger');
                back.style.height = front.offsetHeight+"px";
            }else{
                front.style.height = back.offsetHeight+"px";
                console.log('back bigger\nNew Height: '+back.offsetHeight);
            }
        }

        if(i >= 3){
            cards[i].style.marginTop = cards[i-3].firstElementChild.firstElementChild.offsetHeight;
        }
    }
    document.getElementById('expButton').onclick="display('experiences');"
    
}
