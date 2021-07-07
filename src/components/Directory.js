import React from 'react';

import CardItem from './Card-item';

import './Directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'apparel',
                    imageUrl: 'images/apparel.png',
                    id: 1,
                    linkUrl: '',
                },
                {
                    title: 'hats',
                    imageUrl: 'images/hats.png',
                    id: 2,
                    linkUrl: '',
                },
                {
                    title: 'Masks',
                    imageUrl: 'images/accessories.png',
                    id: 3,
                    linkUrl: '',
                },
                {
                    title: 'womens',
                    imageUrl: 'images/card4.png',
                    id: 4,
                    linkUrl: '',
                },
                // {
                //     title: 'mens',
                //     imageUrl: 'images/graffbw.png',
                //     id: 5,
                //     linkUrl: '',
                // },
            ],
        };
    }

    render() {
      return (
        <div className="directory-menu">
            {this.state.sections.map(({ id, ...otherSectionProps }) => (
                <CardItem key={id} {...otherSectionProps} />
            ))}
        </div>
       );
    }
}

export default Directory;