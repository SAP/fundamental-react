import shortId from 'shortid';

// A passthrough method to prepend cnqr- to every automatically generated ID.
function generate() {
    return 'cnqr-' + shortId.generate();
}

export default { generate };
