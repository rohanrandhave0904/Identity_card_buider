function generate_id(){
   //for college name
    let collegeData = document.getElementById("college-name").value;
    sessionStorage.setItem("collegeData", collegeData);

    //for your-name
    let yourName = document.getElementById("your-name").value;
    sessionStorage.setItem("yourName", yourName);

    //for DOB
    let yourdob = document.getElementById("your-dob").value;
    sessionStorage.setItem("yourdob",yourdob );
  
    //for class index
    let classIndex= document.getElementById("class-index").value;
    sessionStorage.setItem("classIndex",classIndex );


    
    //for photo
    let photoInput = document.getElementById("photoInput");
    if (photoInput.files.length > 0) {
        let reader = new FileReader();

        reader.onload = function (e) {
            sessionStorage.setItem("photoInput", e.target.result);
            window.location.href = "home.html";
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        window.location.href = "home.html";
    }
}