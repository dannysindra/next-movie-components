import React from 'react';
import { Credit } from '../credit';

export default {
    title: 'Credit'
};

export const base = () => (
    <>
        <Credit
            name="Joaquin Phoenix"
            description="Arthur Fleck / Joker"
            imageUrl="https://image.tmdb.org/t/p/w185/zixTWuMZ1D8EopgOhLVZ6Js2ux3.jpg"
        />
        <Credit
            name="Robert De Niro"
            description="Murray Franklin"
            imageUrl="https://image.tmdb.org/t/p/w185/8Bgdfv1oN9Mw0YuMHP6fw8KzDkc.jpg"
        />
        <Credit
            name="Zazie Beetz"
            description="Sophie Dumond"
            imageUrl="https://image.tmdb.org/t/p/w185/sgxzT54GnvgeMnOZgpQQx9csAdd.jpg"
        />
    </>
);
