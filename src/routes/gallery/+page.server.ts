import type { PageServerLoad } from './$types';
import { client } from '../../vendors/utils';

export const load: PageServerLoad = async () => {
	const query = `
                query MyQuery {
  galleries {
    galleryImage {
      url
    }
  }
}
`;
	const data = await client({ query, fetch: fetch });

	return {
		galleries: data.galleries
	};
};
