function removeAccent(str) {
    var regex = /[^a-z0-9]/gi;
    return str.replace(regex, "");
}

module.exports = removeAccent;
