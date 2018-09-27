function escapeHTML(str) {
    return str.replace(/[&"'<>]/g, (m) => ({
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;"
    })[m] || m);
}
 
fetch("https://example.com/links.json").then(x => x.json()).then((data) => {
    $("#list").append("<li>" + escapeHTML(item.text) + "</li>");
));
