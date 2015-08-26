$(document).ready(function() {
    format();
});

function format() {
    for (var command in aloha.ui.commands) {
        $('.action-' + command).on('click', aloha.ui.command(aloha.ui.commands[command]));
    }
};