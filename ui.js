//create UI class

class UI{

    //create constructor for us
    constructor (){

        // get a reference to the profile div
        this.profile  = document.querySelector('#profile');
    }


    //create method to show the profile

    showProfile(user){

      
     this.profile.innerHTML = `

     <div class = "card card-body mb-3">

        <div class ="row">

            <div class ="col-md-3">

                <img class = "img-fluid mb-2" src = "${user.avatar_url}">
                <a href"${user.html_url}" target="_blank" class = "btn btn-primary btn-block">View Profile</a>

                
            
            
            <div>
    
            <div class ="col-md-9">


            
            
            <div>
    
    
        </div>

     
     
     </div>
     
     
     
     `;

    

    }
}