     var color=["aqua","pink","purple","yellow","blue","black","red","brown","grey","green","orange","gold","silver","violet"];
     var guess_color_adjust;
     var guess_color;
     var target;
     var time=0;
     var finished=false;
     var color_sort;
     var random_number;
     
     function do_game() {
     color_sort=color.sort();
     var color_collect=(color_sort.join());
     random_number=Math.floor(Math.random()*11);
     target=color_sort[random_number];
    alert("The answer is:"+target);
     while(!finished){
       var user_input=prompt("I'm thinking of one of these colors:\n\n"+ color_collect +"\n\n" +"What color I thinking of?");
        if(user_input!=null){guess_color_adjust=user_input.toLowerCase()};
        guess_color=color_sort.indexOf(guess_color_adjust);
         time++;
         finished=check_guess();
         }
     }
     ///// ////// ///////////////////
     ///  .  ///   . //////////////////
     //// /// // ////////////////////
      ///////   ////////////////////
     function check_guess(){
         if(guess_color <0){
             alert("Sorry, I didn't recognize your color.\n\n"+"Please try again!");
             return false;
             }
         if(guess_color >random_number){
             alert("Sorry,your guess is not correct!!\n\n"+"Hint:your color is alphabetically higher than mine.\n\n"
         +"Please try again!"); return false;
         }
           if(guess_color <random_number){
             alert("Sorry,your guess is not correct!!\n\n"+"Hint:your color is alphabetically lower than mine.\n\n"
         +"Please try again!"); return false;
         }
         if(guess_color=random_number){
         var BG=document.body;
         BG.style.background=target;
         alert("You are correct\n\n"+"You guess "+time+" times to get the answer!");
         return true;
         }
     }
