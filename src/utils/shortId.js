import shortId from 'shortid';

// A passthrough method to prepend fd- to every automatically generated ID.
function generate() {
    return 'fd-' + shortId.generate();
}

export default { generate };
