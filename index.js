const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const contain = document.getElementById("contain");
const nameA = document.getElementById("name");
const usernameA = document.getElementById("username");
const locationA = document.getElementById("location");
const avatarA = document.getElementById("avi");
const postA = document.getElementById("post");
const commentA = document.getElementById("comment");
const likesA = document.getElementById("likes");

// shorter attempt: iterate over index of posts[] , and at each index, since keys are static, just call the value
// for post in posts
// >> 0, 1, 2
// add whole container with string literals
// $post.name()

for (pst of posts) {
    console.log(pst.name)
    console.log(pst.username)
    console.log(pst.location)
    console.log(pst.avatar)
    console.log(pst.post)
    console.log(pst.comment)
    console.log(pst.likes)
    contain.innerHTML += `


                <section class="post-meta">
                <!-- <img user avatar> -->
                    <img class="avis" id="avi" src="${pst.avatar}">
                    <div class="name-location">
                        <h2 id="name">${pst.name}</h2>
                        <p id="location">${pst.location}</p>
                    </div>
                </section>
                
                <section class="post">
                    <img id="post" src="${pst.post}">
                </section>
                
                <section class="post-action">
                <!-- <buttons> -->
                <div class="buttons">
                    <img class="btn" id="heart" src="images/icon-heart.png">
                    <img class="btn" id="comment" src="images/icon-comment.png">
                    <img class="btn" id="dm" src="images/icon-dm.png">
                </div>
                <!-- <likes> -->
                    <h2 id="likes">${pst.likes} likes</h2>
                </section>

                
                <section class="caption">
                    <p id="caption"><span id="username">${pst.username}</span><span id="comment">${pst.comment}</span></p>
                </section>


        
            
    `
    
}




// original code.. basically- too much. will probably work if i add the whole container to the body with each iteraation



// let keyz = Object.keys(posts[0]);
// let valz = []

// for (let post of posts) {
//     // console.log(post)
//     valueList = []
//     for (let val in post) {
//         // console.log(post[val]);
//         //change values at html
//         valueList.push(post[val])   
//     }
    
//     // console.log(valueList)
    
    
//     const nameB = valueList[0];
//     const usernameB = valueList[1];
//     const locationB = valueList[2];
//     const avatarB = valueList[3];
//     const postB = valueList[4];
//     const commentB = valueList[5];
//     const likesB = valueList[6];
    
//     console.log(nameB, usernameB, locationB, avatarB, postB, commentB, likesB)
//     //maybe add the entire container as a new element?? to the body tag
    
//         //     <div class="container">
//         //     <header>
//         //         <img id="logo" src="images/logo.png">
//         //         <!-- <img self avatar> -->
//         //         <img class="avis" id="userAVI" src="images/user-avatar.png">
//         //     </header>
            
//         //     <section class="post-meta">
//         //     <!-- <img user avatar> -->
//         //         <img class="avis" id="avi" src="${avatarB}">
//         //         <div class="name-location">
//         //             <h2 id="name">${nameB}</h2>
//         //             <p id="location">${locationB}</p>
//         //         </div>
//         //     </section>
            
//         //     <section class="post">
//         //         <img id="post" src="${postB}">
//         //     </section>
            
//         //     <section class="post-action">
//         //     <!-- <buttons> -->
//         //     <div class="buttons">
//         //         <img class="btn" id="heart" src="images/icon-heart.png">
//         //         <img class="btn" id="comment" src="images/icon-comment.png">
//         //         <img class="btn" id="dm" src="images/icon-dm.png">
//         //     </div>
//         //     <!-- <likes> -->
//         //         <h2 id="likes">${likesB} likes</h2>
//         //     </section>

            
//         //     <section class="caption">
//         //         <p id="caption"><span id="username">${usernameB}</span><span id="comment">${commentB}</span></p>
//         //     </section>
//         //     <script src="index.js"></script>
            
//         // </div>

    
    
// }

// // console.log(valz)
