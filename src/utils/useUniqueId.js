import shortid from './shortId';
import { useState } from 'react';

export default (defaultId) => {
    if (defaultId) return defaultId;
    const [uniqueId, setUniqueId] = useState();
    if (uniqueId) return uniqueId;
    const id = shortid.generate();
    setUniqueId(id);
    return id;
};
