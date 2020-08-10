import shortid from './shortId';
import { useState } from 'react';

export default () => {
    const [uniqueId, setUniqueId] = useState();
    if (uniqueId) return uniqueId;
    const id = shortid.generate();
    setUniqueId(id);
    return id;
};
