$(document).ready(function () {
    
    var nums = [1,2, 3, 4, 5];

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var img = $("<figure><figcaption>Cat "+ num + "</figcaption><img src='img/cat" + num+".jpg' id='cat'"+ num+" class='cat'></figure>");
        var time = 0;
        img.click((function (numcopy, timecopy) {
            return function() {
                timecopy++;
                $("#result").text("Cat " + numcopy + " has been clicked " + timecopy + " times!");
            } 
        })(num, time));
        
        $('body').append(img);
    }
});
    