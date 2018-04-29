var form = document.getElementById('addForm');
var noteList = document.getElementById('notes');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addNote);
// Delete event
noteList.addEventListener('click', removeNote);
// Filter event
filter.addEventListener('keyup', filterNotes);

// Add note
function addNote(e){
  e.preventDefault();

  // Get input value
  var newNote = document.getElementById('note').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newNote));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  noteList.appendChild(li);
}

// Remove note
function removeNote(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      noteList.removeChild(li);
    }
  }
}

// Filter Notes
function filterNotes(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var notes = noteList.getElementsByTagName('li');
  // Convert to an array
  Array.from(notes).forEach(function(note){
    var noteName = note.firstChild.textContent;
    if(noteName.toLowerCase().indexOf(text) != -1){
      note.style.display = 'block';
    } else {
      note.style.display = 'none';
    }
  });
}