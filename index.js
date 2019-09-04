function validate() {
    var name = document.forms["contactForm"]["Name"];               
    var email = document.forms["contactForm"]["Email"];    
    var title = document.forms["contactForm"]["Title"];  
    var message =  document.forms["contactForm"]["Message"];  

    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    
    if (email.value == "")                                  
    { 
        window.alert("Please enter your email."); 
        name.focus(); 
        return false; 
    } 

    if (title.value == "")                                  
    { 
        window.alert("Please enter the title of your message."); 
        name.focus(); 
        return false; 
    } 

    if (message.value == "")                                  
    { 
        window.alert("Please enter your message."); 
        name.focus(); 
        return false; 
    } 
  }