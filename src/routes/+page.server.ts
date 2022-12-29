import type { PageServerLoad } from './$types';
import { client } from '../vendors/utils';

export const load: PageServerLoad = async () => {
	const query = `
        query MyQuery {
            dishes {
                dishTitle
                dishImage {
                    url
                }
                dishDescription
            }
        }`;
	const data = await client({ query, fetch: fetch });

	return {
		dishes: data.dishes
	};
};
