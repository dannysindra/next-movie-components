import React from 'react';
import { Credit } from '../credit';
import { PaginatedItems } from '../paginated-items';

const data = [
    {
        creditId: '5a88f80a9251410b4d05826b',
        name: 'Joaquin Phoenix',
        character: 'Arthur Fleck / Joker',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/zixTWuMZ1D8EopgOhLVZ6Js2ux3.jpg'
    },
    {
        creditId: '5b5242749251411f8600052d',
        name: 'Robert De Niro',
        character: 'Murray Franklin',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/8Bgdfv1oN9Mw0YuMHP6fw8KzDkc.jpg'
    },
    {
        creditId: '5b5122a00e0a262596006a4c',
        name: 'Zazie Beetz',
        character: 'Sophie Dumond',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/sgxzT54GnvgeMnOZgpQQx9csAdd.jpg'
    },
    {
        creditId: '5b5636fcc3a3685c8e026bac',
        name: 'Frances Conroy',
        character: 'Penny Fleck',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/aJRQAkO24L6bH8qkkE5Iv1nA3gf.jpg'
    },
    {
        creditId: '5b9fecf0c3a3680441002ee1',
        name: 'Brett Cullen',
        character: 'Thomas Wayne',
        profileImgUrl:
            'https://image.tmdb.org/t/p/w185/o94R8Z59lrwbZ0LcUkDSPu1GS7q.jpg'
    }
];

const renderer = prop => (
    <Credit
        id={prop.creditId}
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
