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
                <a href="${user.html_url}" target= "_blank" class = "btn btn-info btn-block">View Profile</a>

            </div>
    
            <div class ="col-md-9">

                <span class = "badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
                <span class = "badge badge-pill badge-danger">Public Gists: ${user.public_gists}</span>
                <span class = "badge badge-pill badge-info">Followers: ${user.followers}</span>
                <span class = "badge badge-pill badge-dark">Following: ${user.following}</span>

                <br><br>

                <ul class = 'list-group'>
                    <li class ="list-group-item active">Company: ${user.company}</li>
                    <li class ="list-group-item">Website/blog: ${user.blog}</li>
                    <li class ="list-group-item">Location: ${user.location}</li>
                    <li class ="list-group-item">Member Since: ${user.created_at}</li>
                </ul>

            </div>
    
    
        </div>

     
     
     </div>


     
     
     
     
     `;

    

    }
}