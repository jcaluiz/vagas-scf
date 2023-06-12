const username = {};

const howManyTimesWasCalled = (name) => {
    if (username[name]) {
        username[name] += 1;
    } else {
        username[name] = 1;
    }
}

module.exports = {
    username,
    howManyTimesWasCalled,
}