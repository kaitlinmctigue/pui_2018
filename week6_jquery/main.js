
$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");

    if (itemInput.val()) {
        list.append("<li>" + "<input type=\"checkbox\" class=\"complete-item\">" + itemInput.val() + " <button class=\"delete-item\">X</button>" + "</li>");
    }
    itemInput[0].value = '';
});

$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});

$(document).on("click", ".complete-item", function() {
    if (this.checked) {
        this.parentNode.style.textDecoration = "line-through";
    } else {
        this.parentNode.style.textDecoration = "none";
    }
});
