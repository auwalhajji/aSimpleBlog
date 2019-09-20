const BASE_URI = 'http://localhost:3000'

// fetch blog from database
async function fetchBlog() {
    const response = await fetch(`${BASE_URI}/blog`)
    const blog = await response.json()
    //console.log(blog);
    populateBlog(blog)
}

fetchBlog();

//testing add comment btn


const blogContainer = document.querySelector('#post-well');

//function to help print data on page
function formatAndBlog(blog) {

    blogContainer.innerHTML += `
    <div class="post" data-blogID='${JSON.stringify(blog)}' id="post${blog.id}">
                        <h1 class="title">${blog.title}</h1>
                        <p class="meta"><strong>Posted on ${blog.date} </strong>
                        &nbsp;&bull;&nbsp; 
                        <!-- Button to Open the Modal -->
                        <button type="button" class="btn btn-primary btn-blog" id='btn-add-comment' postID='${blog.id}' data-toggle="modal" data-target="#myModal">Add Comment</button>
                        <div class="entry">
                             <p>${blog.post}</p>
                        </div>                                
                </div>			 
`;

}

//Grab me add comment id


    

// get data and populate our page with data
const populateBlog = blog => {
    for (let i = 0; i < blog.length; i++) {        
        console.log(blog[i]);
            formatAndBlog(blog[i]);

    }
}


//On click of post add comment btn grab the post id and assign it to the add-comment-form input fiel
const btnBlog = $('.btn-blog');
btnBlog.on('click', function() {
    const grabID = $(this).attr('postID');
    $('BlogId').val(grabID);
})

$('#btnAddComment').click( function({target}) {
    const bID = $('.btn-blog').value;
    //alert(target.id, + ' ' + bID + ' Hi it work!');
    alert("Value: " + $('.btn-blog').val())
    
});
