// alert
// alert('This is an alert message');

// prompt
// let name = prompt('What is your name ?', 'Guest');
// console.log(name);

// confirm
let choice = confirm('Do you want to delete the post ?');
if (choice) {
  // code to delete the post
  console.log('Post deleted successfully');
  alert('Post deleted successfully');
} else {
  // code to cancel delete
  console.log('Post not deleted');
  alert('Post not deleted');
}
