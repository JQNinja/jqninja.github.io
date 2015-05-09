function padTwoZeros(number) {
    if (number <= 99) { number = ("0" + number).slice(-2); }
    return number;
}
function padThreeZeros(number) {
    if (number <= 999) { number = ("00" + number).slice(-3); }
    return number;
}

var brainInflate = [
        "img/brain/brainMelt_0000.png",
        "img/brain/brainMelt_0001.png",
        "img/brain/brainMelt_0002.png",
        "img/brain/brainMelt_0003.png",
        "img/brain/brainMelt_0004.png",
        "img/brain/brainMelt_0005.png",
        "img/brain/brainMelt_0006.png",
        "img/brain/brainMelt_0007.png",
        "img/brain/brainMelt_0008.png",
        "img/brain/brainMelt_0009.png",
        "img/brain/brainMelt_0010.png",
        "img/brain/brainMelt_0011.png",
        "img/brain/brainMelt_0012.png",
        "img/brain/brainMelt_0015.png",
        "img/brain/brainMelt_0016.png"
];

var brainLight = [];
for (var i = 0; i <= 18; i++) {
    var num = padTwoZeros(i);
    brainLight.push("img/brainlight/brainLight_000" + num + ".png");
}

for (var i = 0; i <= 10; i++) {
    brainLight.push("img/brainlight/brainLight_00018.png");
}

var brainSleep = [];
for (var i = 0; i <= 160; i++) {
    var num = padThreeZeros(i);
    brainSleep.push("img/brainsleep/brainSleep_00" + num + ".png");
}

var brainStress = [];
for (var i = 16; i >= 0; i--) {
    var num = padTwoZeros(i);
    brainStress.push("img/brainstress/brainShatter_00" + num + ".png");
}

for (var i = 0; i <= 4; i++) {
    brainStress.push("img/brainstress/brainShatter_0000.png");
}

for (var i = 0; i <= 16; i++) {
    var num = padTwoZeros(i);
    brainStress.push("img/brainstress/brainShatter_00" + num + ".png");
}


var heartBeat = [
        "img/heart/HeartBeating-new0032.png",
        "img/heart/HeartBeating-new0033.png",
        "img/heart/HeartBeating-new0034.png",
        "img/heart/HeartBeating-new0035.png",
        "img/heart/HeartBeating-new0036.png",
        "img/heart/HeartBeating-new0037.png",
        "img/heart/HeartBeating-new0038.png",
        "img/heart/HeartBeating-new0039.png",
        "img/heart/HeartBeating-new0040.png",
        "img/heart/HeartBeating-new0041.png",
        "img/heart/HeartBeating-new0042.png",
        "img/heart/HeartBeating-new0043.png",
        "img/heart/HeartBeating-new0044.png",
        "img/heart/HeartBeating-new0045.png",
        "img/heart/HeartBeating-new0046.png",
        "img/heart/HeartBeating-new0047.png",
        "img/heart/HeartBeating-new0048.png",
        "img/heart/HeartBeating-new0049.png",
        "img/heart/HeartBeating-new0050.png",
        "img/heart/HeartBeating-new0051.png",
        "img/heart/HeartBeating-new0052.png",
        "img/heart/HeartBeating-new0053.png",
        "img/heart/HeartBeating-new0054.png",
        "img/heart/HeartBeating-new0055.png",
        "img/heart/HeartBeating-new0056.png",
        "img/heart/HeartBeating-new0057.png",
        "img/heart/HeartBeating-new0058.png",
        "img/heart/HeartBeating-new0059.png",
        "img/heart/HeartBeating-new0060.png",
        "img/heart/HeartBeating-new0061.png",
        "img/heart/HeartBeating-new0062.png",
        "img/heart/HeartBeating-new0063.png"

];

var feelings1 = [];
var feelings2 = [];
var feelings3 = [];
var feelings4 = [];

for (var i = 444; i <= 464; i++) {
    feelings1.push("img/feel/HackGirl_00" + i + ".png");
}
for (var i = 465; i <= 485; i++) {
    feelings2.push("img/feel/HackGirl_00" + i + ".png");
}
for (var i = 486; i <= 506; i++) {
    feelings3.push("img/feel/HackGirl_00" + i + ".png");
}
for (var i = 507; i <= 527; i++) {
    feelings4.push("img/feel/HackGirl_00" + i + ".png");
}

var feelings5 = ["img/feel/HackGirl_00527.png"];



$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    
    // build scene


        new ScrollMagic.Scene({ triggerElement: "#circles-trigger", duration: 1300, offset: 400 })
            .setPin("#circles-pin")
            .addIndicators({ name: "circles" })
            .setClassToggle("#circle-physical-activity", "inflate")
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#circles-trigger", duration: 500, offset: 1701 })
            .setPin("#circles-pin")
            .setTween(TweenMax.staggerTo(".choice-circle.remove", 1, { opacity: 0, rotation: 720 }, 0.5))
            .addIndicators({ name: "circles 2" })
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#circles-trigger", duration: 1300, offset: 2202 })
            .setPin("#circles-pin")
            .setClassToggle("#circles-wrapper", "show-physical-activity")
            .addIndicators({ name: "circles 3" })
            .addTo(controller);
     
        new ScrollMagic.Scene({ triggerElement: "#brain-title-trigger", duration: 1300, offset: 200 })
            .setPin("#brain-title-pin")
            .addIndicators({ name: "brain-title" })
            .addTo(controller);
    
        var tweenInflate = getTween("brainInflate", 1.5, brainInflate, 0);
        var tweenSleep = getTween("brainInflate", 7, brainSleep, 0);
        var tweenLight = getTween("brainInflate", 3, brainLight, 0);
        var tweenStress = getTween("brainInflate", 3, brainStress, 0);
        new ScrollMagic.Scene({ triggerElement: "#brain-trigger", duration: 1300, offset: 300 })
            .setTween(tweenInflate)
            .setPin("#brain-pin")
            .addIndicators({ name: "brain" })
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#brain-trigger", duration: 900, offset: 1600 })
            .setPin("#brain-pin")
            .setClassToggle("#brain-pin .message-text-block", "feel-happier")
            .addIndicators({ name: "brain 2" })
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#brain-trigger", duration: 2300, offset: 2501 })
            .setPin("#brain-pin")
            .setTween(tweenLight)
            .setClassToggle("#brain-pin .message-text-block", "think-better")
            .addIndicators({ name: "brain 3" })
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#brain-trigger", duration: 2000, offset: 4802 })
            .setPin("#brain-pin")
            .setTween(tweenStress)
            .setClassToggle("#brain-pin .message-text-block", "lower-stress")
            .addIndicators({ name: "brain 4" })
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#brain-trigger", duration: 7000, offset: 6803 })
            .setPin("#brain-pin")
            .setTween(tweenSleep)
            .setClassToggle("#brain-pin .message-text-block", "sleep-better")
            .addIndicators({ name: "brain 5" })
            .addTo(controller);



        new ScrollMagic.Scene({ triggerElement: "#heart-title-trigger", duration: 1300, offset: 200 })
        .setPin("#heart-title-pin")
        .addIndicators({ name: "heart-title" })
        .addTo(controller);

        //var fastHeartTween = getTween("heartBeat", 0.3, heartBeat, -1);
        var fastHeartTween2 = getTween("heartBeat", 0.3, heartBeat, -1);
        var fastHeartTween3 = getTween("heartBeat", 0.6, heartBeat, -1);
        var fastHeartTween4 = getTween("heartBeat", 0.9, heartBeat, -1);
        new ScrollMagic.Scene({ triggerElement: "#heart-trigger", duration: 900, offset: 300 })
            .setTween(fastHeartTween2)
            .setPin("#heart-pin")
            .setClassToggle("#heart-pin .message-text-block", "its-a-muscle")
            .addIndicators({ name: "heart" })
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#heart-trigger", duration: 900, offset: 1200 })
            .setTween(fastHeartTween3)
            .setPin("#heart-pin")
            .setClassToggle("#heart-pin .message-text-block", "activity-makes-stronger")
            .addIndicators({ name: "heart 2" })
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#heart-trigger", duration: 900, offset: 2102 })
            .setTween(fastHeartTween4)
            .setPin("#heart-pin")
            .setClassToggle("#heart-pin .message-text-block", "strong-heart")
            .addIndicators({ name: "heart 3" })
            .addTo(controller);

    
        new ScrollMagic.Scene({ triggerElement: "#feel-title-trigger", duration: 1300, offset: 200 })
        .setPin("#feel-title-pin")
        .addIndicators({ name: "feel-title" })
        .addTo(controller);

        var feelTween1 = getTween("feelings", 1.5, feelings1, 0);
        var feelTween2 = getTween("feelings", 1.5, feelings2, 0);
        var feelTween3 = getTween("feelings", 1.5, feelings3, 0);
        var feelTween4 = getTween("feelings", 1.5, feelings4, 0);
        var feelTween5 = getTween("feelings", 1.5, feelings5, 0);
        new ScrollMagic.Scene({ triggerElement: "#feel-trigger", duration: 900, offset: 300 })
            .setTween(feelTween1)
            .setPin("#feel-pin")
            .setClassToggle("#feel-pin .message-text-block", "physical")
            .addIndicators({ name: "feel" })
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#feel-trigger", duration: 900, offset: 1202 })
        .setTween(feelTween2)
        .setPin("#feel-pin")
        
            .setClassToggle("#feel-pin .message-text-block", "self-esteem")
            .addIndicators({ name: "feel 2" })
        .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#feel-trigger", duration: 900, offset: 2104 })
        .setTween(feelTween3)
        .setPin("#feel-pin")
        
        .setClassToggle("#feel-pin .message-text-block", "confidence")
        .addIndicators({ name: "feel 3" })
        .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#feel-trigger", duration: 900, offset: 3006 })
        .setTween(feelTween4)
        .setPin("#feel-pin")

        .setClassToggle("#feel-pin .message-text-block", "energy")
        .addIndicators({ name: "feel 4" })
        .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#feel-trigger", duration: 300, offset: 3908 })
        .setTween(feelTween5)
        .setPin("#feel-pin")
        .setClassToggle("#feel-pin .message-text-block", "better")
        .addIndicators({ name: "feel 5" })
        .addTo(controller);




    new ScrollMagic.Scene({ triggerElement: "#more-trigger", offset: 350 })
        .setPin("#more-pin")
        .setTween(TweenMax.staggerFrom(".more-activity", 1, { opacity: 0, y: 100 }, 0.3))
        .on("enter leave", function (e) {
            if (e.type === "enter") {
                $("#juice-mouse").addClass("done");
            } else {
                $("#juice-mouse").removeClass("done");
            }
        })
        .addIndicators({ name: "more" })
        .addTo(controller);



        function getTween(id, duration, imageSeq, repeat) {
        // TweenMax can tween any property of any object. We use this object to cycle through the array
        var obj = { curImg: 0 };

        // create tween
        var tweenMax = TweenMax.to(obj, duration,
            {
                curImg: imageSeq.length - 1,
                roundProps: "curImg",
                immediateRender: true,
                repeat: repeat,
                ease: Power2.easeInOut,
                onUpdate: function () {
                    $("#" + id).attr("src", imageSeq[obj.curImg]); // set the image source
                }
            }
        );
        return tweenMax;
    }

});