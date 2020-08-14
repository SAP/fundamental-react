import shortid from './shortId';
import { useState } from 'react';

export default (defaultId) => {
    const [uniqueId, setUniqueId] = useState();
    if (defaultId) return defaultId;
    if (uniqueId) return uniqueId;
    const id = shortid.generate();
    setUniqueId(id);
    return id;
};
