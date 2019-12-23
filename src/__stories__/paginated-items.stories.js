import React from 'react';
import { Credit } from '../credit';
import { PaginatedItems } from '../paginated-items';

const data = [
    {
        name: 'Joaquin Phoenix',
        character: 'Arthur Fleck / Joker',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/zixTWuMZ1D8EopgOhLVZ6Js2ux3.jpg'
    },
    {
        name: 'Robert De Niro',
        character: 'Murray Franklin',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/8Bgdfv1oN9Mw0YuMHP6fw8KzDkc.jpg'
    },
    {
        name: 'Zazie Beetz',
        character: 'Sophie Dumond',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/sgxzT54GnvgeMnOZgpQQx9csAdd.jpg'
    },
    {
        name: 'Frances Conroy',
        character: 'Penny Fleck',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/aJRQAkO24L6bH8qkkE5Iv1nA3gf.jpg'
    },
    {
        name: 'Brett Cullen',
        character: 'Thomas Wayne',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/o94R8Z59lrwbZ0LcUkDSPu1GS7q.jpg'
    }
];

const renderer = prop => (
    <Credit
        name={prop.name}
        description={prop.character}
        imageUrl={prop.profileImgUrl}
    />
);

export default {
    title: 'PaginatedItems'
};

export const base = () => (
    <PaginatedItems data={data} pageSize={3} renderer={renderer} />
);
