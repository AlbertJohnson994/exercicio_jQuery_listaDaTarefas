$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();
        const taskText = $('#task-input').val().trim();
        if (taskText) {
            const listItem = $('<li></li>').text(taskText);
            listItem.on('click', function() {
                $(this).toggleClass('completed');
            });
            $('#task-list').append(listItem);
            $('#task-input').val('');
        }
    });
});
