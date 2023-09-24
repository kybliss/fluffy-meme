function deleteNote(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `/db/${id}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    xhr.onload = function() {
        if (xhr.status === 200){
            location.reload();
        } else {
            alert('Error occurred while deleting.')
        }
    };
}