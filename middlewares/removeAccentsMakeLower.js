module.exports = (word) => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();