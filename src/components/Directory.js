import React from 'react';

import MenuItem from './Menu-item';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'apparel',
                    imageUrl: 'images/apparel.png',
                    id: 1,
                    linkUrl: 'apparel',
                },
                {
                    title: 'hats',
                    imageUrl: 'images/hats.png',
                    id: 2,
                    linkUrl: '',
                },
                {
                    title: 'sneakers',
                    imageUrl: '',
                    id: 3,
                    linkUrl: '',
                },
                {
                    title: 'womens',
                    imageUrl: 'images/card4.png',
                    size: 'large',
                    id: 4,
                    linkUrl: '',
                },
                {
                    title: 'mens',
                    imageUrl: 'images/graffbw.png',
                    size: 'large',
                    id: 5,
                    linkUrl: '',
                },
            ],
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;