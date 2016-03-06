function matching_game() {

    var num = 15;
    var position_left =
        getRandomCode(1, 750, num)
        ;
    var position_top =
        getRandomCode(1, 550, num)
        ;
    var combineP = concatP(position_left, position_top);


    var left_span = document.getElementById("left_span")
    var right_span = document.getElementById("right_span")

    for (var i = 0; i < num; i++) {
        var theImg = document.createElement("img");
        theImg.src = "smile.png";
        theImg.style.width = "50px";
        theImg.style.position = "absolute";
        theImg.style.top = position_top[i] + "px";
        theImg.style.left = position_left[i] + "px";
         left_span.appendChild(theImg);
         right_span=left_span.cloneNode(true); 
    }
      
}


/**
 * param arr1 [1,2,3]  arr2 [4,5,6,7,8]
 * return final [[1,4],[2,5],[3,6]]
 */
function concatP(arr1, arr2) {
    var final = [];
    for (var i = 0; i < arr1.length; i++) {
        final.push([arr1[i], arr2[i]]);
    }
    return final;
}

function getRandomCode(min, max, step) {
    var num = "";
    //code here
    var domain = max - min + 1;

    if (!step) {
        step = 1;
    }

    for (var i = 0; i < step; i++) {
        if (i == step - 1) {
            num += (Math.random() * domain + 2).toFixed(4);
        } else {
            num += (Math.random() * domain + 2).toFixed(4) + ",";
        }

    }

    num = num.split(",");

    return num;
}
