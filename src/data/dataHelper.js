import Data from './blogs.json'

// get all blogs data from database
function fetchBlogs(){
    const LS_KEY = 'blogs'
    let fromLs = localStorage.getItem(LS_KEY)
    if(!fromLs){
        localStorage.setItem(LS_KEY, JSON.stringify(Data.data.blogs))
        fromLs = localStorage.getItem(LS_KEY)
    }
    return JSON.parse(fromLs)
}

// get blog by id
function fetchBlogById(id){
    const LS_KEY = 'blogs'
    let fromLs = localStorage.getItem(LS_KEY)
    if(!fromLs){
        localStorage.setItem(LS_KEY, JSON.stringify(Data.data.blogs))
        fromLs = localStorage.getItem(LS_KEY)
    }
    const blogs = JSON.parse(fromLs)
    let blog = blogs.filter((item)=>item.id === id)
    let blogObject= Object.assign({},blog[0])
    return blogObject
}

// set new blog to database
function setBlog(blog){
    const LS_KEY = 'blogs' 
    let fromLs = localStorage.getItem(LS_KEY)
    const blogs = JSON.parse(fromLs)
    let existingBlog = blogs.includes(blog)
    if(!existingBlog){
        blogs.push(blog)
        console.log('here post new', blogs)
        localStorage.setItem(LS_KEY,JSON.stringify(blogs))
    }else{
        console.log('blog has added')
    }
}

// set new comment to database
function setComment(blogId,comment){
    const LS_KEY = 'blogs' 
    let fromLs = localStorage.getItem(LS_KEY)
    const blogs = JSON.parse(fromLs)
    let findBlog = blogs.find(item=>item.id === blogId)
    let blogComments = findBlog.comments
        blogComments.push(comment)
        /*console.log('new comments:', blogComments)
        console.log('new blogs:', blogs)*/
        localStorage.setItem(LS_KEY,JSON.stringify(blogs))
}

// set user name 
function setUser(userName){
    const LS_KEY = 'blog_user'
    let fromLs = localStorage.getItem(LS_KEY)
    if(!fromLs){
        localStorage.setItem(LS_KEY,JSON.stringify(userName))
    }
}

// check if user loged in
function checkLoginStatus(){
    const LS_KEY = 'blog_user'
    let fromLs = localStorage.getItem(LS_KEY)
    if(fromLs){
        return true
    }else{
        return false
    }
}

// remove user data
function removeUser(){
    const LS_KEY = 'blog_user'
    let fromLs = localStorage.getItem(LS_KEY)
    if(fromLs){
        localStorage.removeItem(LS_KEY)
    }
}

export {fetchBlogs, fetchBlogById, setBlog, setComment, setUser, checkLoginStatus, removeUser}