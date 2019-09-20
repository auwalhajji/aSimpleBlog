$(document).ready(function () {

    const DATABASE_URI = 'http://localhost:3000/blog';
    let EDIT_BLOG;

    const form = document.querySelector('form');
    const insertNewBlog = document.querySelector('#btnAddBlog');
    const updateEditedBlog = document.querySelector('#btnSaveEditedBlog');


    // get data from our backend
    const getBlog = async () => {
        const response = await fetch(DATABASE_URI);
        const myblogs = await response.json();
        console.log(myblogs);
        //this function populate my blog
        populateBlogs(myblogs)

    }

    getBlog()
    // get data and populate our page with data
    const populateBlogs = blogs => {
        const formatedBlogs = blogs.map(formatedBlog);
        const displayBlogs = document.querySelector('tbody');

        displayBlogs.innerHTML += formatedBlogs.join('');
    };
    // get single contact data and formate it
    const formatedBlog = blog => {
        const { title, post, date, id } = blog;

        return `
    <tr data-blogID=${JSON.stringify(blog)} id="${id}">
        <td class="blog">
			<span class="custom-checkbox">
					<input type="checkbox" id="checkbox1" name="options[]" value="1">
					<label for="checkbox1"></label>
			</span>
		</td>
        <td>${title}</td>
        <td>${post}</td>
		<td>${Comment.length}</td>
        <td>${date}</td>
        <td>
            <a href="#editEmployeeModal" class="edit"  data-toggle="modal" onclick='editBlog(${id})'><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" class="delete"  data-toggle="modal" onclick='deleteBlog(${id})'><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
        `;
    };

    insertNewBlog.addEventListener('click', async () => {
        event.preventDefault();
        const blog = {};

        for (const key in form.elements) {
            if (form.elements.hasOwnProperty(key)) {
                const inputElement = form.elements[key];
                if (inputElement['title'] && inputElement.value) {
                    contact[inputElement['title']] = inputElement.value;
                }
            }
        }

        if (!Object.values(blog).length) return;

        const response = await fetch(DATABASE_URI, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...blog })
        });

        await response.json();
    });

    updateEditedBlog.addEventListener('click', async () => {
        event.preventDefault();


        const blog = {};

        for (const key in form.elements) {
            if (form.elements.hasOwnProperty(key)) {
                const inputElement = form.elements[key];
                if (inputElement['title'] && inputElement.value) {
                    contact[inputElement['title']] = inputElement.value;
                }
            }
        }

        if (!Object.values(blog).length) return;

        const response = await fetch(`${DATABASE_URI}/${EDIT_CONTACT.id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...blog })
        });

        await response.json();
    });


    // Activate tooltip
    // $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    const checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
        if (this.checked) {
            checkbox.each(function () {
                this.checked = true;
            });
        } else {
            checkbox.each(function () {
                this.checked = false;
            });
        }
    });
    checkbox.click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });
});

// register button actions
function editBlog(blogID) {
    console.log(blogID);
    
    // const { id } = JSON.parse(path[2].dataset.blog);
    // blog.remove();

    // await fetch(`${DATABASE_URI}/${id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         Accept: 'application/json'
    //     }
    // });
};

const deleteBlog = (blogID) => {

    $("#confirmDelPost").submit(function(){
        console.log('Clicked 1');
        
        $(`#${blogID}`).remove()

        console.log('Clicked 2');

     });
};