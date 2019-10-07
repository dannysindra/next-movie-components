import React from 'react';
import { Card as BaseCard } from 'antd';
import classNames from 'classnames';
import { string, oneOf } from 'prop-types';

import './card.css';

const Card = ({ className, title, posterUrl, releaseDate, size, ...rest }) => {
    const classes = classNames(
        'card',
        {
            'card--small': size === 'small',
            'card--medium': size === 'medium',
            'card--large': size === 'large'
        },
        className
    );

    return (
        <BaseCard
            {...rest}
            className={classes}
            hoverable
            cover={<img alt={title} src={posterUrl} />}
        >
            <BaseCard.Meta
                className="card__meta"
                title={title}
                description={releaseDate}
            />
        </BaseCard>
    );
};

Card.propTypes = {
    className: string,
    title: string.isRequired,
    posterUrl: string,
    releaseDate: string.isRequired,
    size: oneOf(['small', 'medium', 'large'])
};

Card.defaultProps = {
    className: '',
    posterUrl: '',
    size: 'medium'
};

export default Card;
