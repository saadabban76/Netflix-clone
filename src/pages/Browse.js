import React from 'react';
import BrowseContainer from '../components/browse';

function Browse() {
    return (
        <BrowseContainer>
            <BrowseContainer.BrowseTheme />
            <BrowseContainer.Showcase />
        </BrowseContainer>
    )
}

export default Browse
