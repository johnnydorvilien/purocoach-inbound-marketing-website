
// showdata();
// // // editrecord();
Deleterecord();



// Ajax request for user insert
document.getElementById("adduser").addEventListener("click", add_user);

function add_user(e) {
    e.preventDefault();
    // console.log("Add button");
    let name = document.getElementById("name").value;
    let designation = document.getElementById("designation").value;
    let userid = document.getElementById("userid").value;
    let user = document.getElementById("user").value;
    // console.log(name);
    // console.log(designation);
    // console.log(userid);
    // console.log(user);
    // create xhr objec
    const xhr = new XMLHttpRequest();

    // initialize

    xhr.open("POST", "insert.php", true);
    //  set request Heade
    xhr.setRequestHeader("Content-Type", "application/json");
    //    Handle Response
    xhr.onload = () => {
        if (xhr.status === 200) {
            //  Response handling code
            // console.log(xhr.responseText);
            document.getElementById("msg").innerHTML = '<div>' + xhr.responseText + '</div>'
            document.getElementById("userform").reset();
            showdata();
        } else {
            console.log("problem occured");
        }
    };
    //  javascript object
    const mydata = { name: name, designation: designation, userid: userid, user: user };
    console.log(mydata);

    // convert javascript object to json string
    const data = JSON.stringify(mydata);
    // console.log(data);

    // send request with data
    xhr.send(data);
    // location.reload();
}
// Ajax request for admin insert
document.getElementById("addadmin").addEventListener("click", add_admin);

function add_admin(e) {
    e.preventDefault();
    // console.log("Add button");
    let namea = document.getElementById("namea").value;
    let designationa = document.getElementById("designationa").value;
    let userida = document.getElementById("userida").value;
    let admin = document.getElementById("admin").value;
    // console.log(namea);
    // console.log(designationa);
    // console.log(userida);
    // console.log(admin);
    // create xhr objec
    const xhr = new XMLHttpRequest();

    // initialize

    xhr.open("POST", "insert.php", true);
    //  set request Heade
    xhr.setRequestHeader("Content-Type", "application/json");
    //    Handle Response
    xhr.onload = () => {
        if (xhr.status === 200) {
            //  Response handling code
            // console.log(xhr.responseText);
            document.getElementById("msg").innerHTML = '<div>' + xhr.responseText + '</div>'
            document.getElementById("adminform").reset();
            showdata();
        } else {
            console.log("problem occured");
        }
    };
    //  javascript object
    const mydata1 = { namea: namea, designationa: designationa, userida: userida, admin: admin };
    console.log(mydata1);

    // convert javascript object to json string
    const data = JSON.stringify(mydata1);
    // console.log(data);

    // send request with data
    xhr.send(data);
    // location.reload();
}

// Delete record
function Deleterecord() {
    var x = document.getElementsByClassName("btn-del");
    // console.log(x);
    // console.log(x.length);
    for (let i = 0; i < x.length; i++) {
        // console.log(x[i].getAttribute("data-uid"));
        x[i].addEventListener("click", function() {
            id = x[i].getAttribute("data-uid");
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "delete.php", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => {
                    if (xhr.status === 200) {
                        // console.log(xhr.response);
                        document.getElementById("msg").innerHTML = '<div>' + xhr.responseText + '</div>'
                        showdata();

                       
                    } else {
                        console.log("error");
                    }
                }
                //  javascript object
            const mydata = { id: id };
            // console.log(mydata);

            // convert javascript object to json string
            const data = JSON.stringify(mydata);
            // console.log(data);

            // send request with data
            xhr.send(data);

        })
    }
    // location.reload();
}



function editrow(id) {




    document.querySelectorAll('#tr_' + id + ' span').forEach(el => el.style.display = "none")
    document.querySelectorAll('#tr_' + id + ' input').forEach(el => el.style.display = "block");
    document.querySelectorAll('#tr_' + id + ' button.btn-save').forEach(el => el.style.display = "block");
    document.querySelectorAll('#tr_' + id + ' button.btn-cancel').forEach(el => el.style.display = "block");
    document.querySelectorAll('#tr_' + id + ' button.btn-edit').forEach(el => el.style.display = "none");
    document.querySelectorAll('#tr_' + id + ' button.btn-danger').forEach(el => el.style.display = "none");
    // document.getElementById('#tr_' + id + ' edit').style.display = "none";


}

function updaterow(id) {
    let namea = document.querySelectorAll('#tr_' + id + ' input#u_name')[0].value;
    let designationa = document.querySelectorAll('#tr_' + id + ' input#u_designations')[0].value;
    let userida = document.querySelectorAll('#tr_' + id + ' input#u_userid')[0].value;
   const xhr = new XMLHttpRequest();

    // // initialize
     xhr.open("POST", "update.php", true);
    //  set request Heade
    xhr.setRequestHeader("Content-Type", "application/json");
    //    Handle Response
    xhr.onload = () => {
        if (xhr.status === 200) {
            //  Response handling code
            console.log(xhr.responseText);
            document.getElementById("msg").innerHTML = '<div>' + xhr.responseText + '</div>'
                // document.getElementById("adminform").reset();
                showdata();
        } else {
            console.log("problem occured");
        }
    };
    //  javascript object
    const mydata1 = { id: id, namea: namea, designationa: designationa, userida: userida };
    // console.log(mydata1);

    // convert javascript object to json string
    const data = JSON.stringify(mydata1);
    // console.log(data);

    // send request with data
    xhr.send(data);
    document.querySelectorAll('#tr_' + id + ' button.btn-save').forEach(el => el.style.display = "none");
    document.querySelectorAll('#tr_' + id + ' button.btn-edit').forEach(el => el.style.display = "block");
    document.querySelectorAll('#tr_' + id + ' button.btn-danger').forEach(el => el.style.display = "block");
    document.querySelectorAll('#tr_' + id + ' span').forEach(el => el.style.display = "block")
    document.querySelectorAll('#tr_' + id + ' input').forEach(el => el.style.display = "none");
    
}
function cancelrow(id) {
    // console.log("hello");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "retrive.php", true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // alert(this.responseText)
        document.getElementById("tblbody").innerHTML = xhr.responseText;
        }
    }
}


function showdata(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "retrive.php", true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // alert(this.responseText)
        document.getElementById("tblbody").innerHTML = xhr.responseText;
        }
    }
}