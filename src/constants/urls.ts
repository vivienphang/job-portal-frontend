import { environment } from 'src/environments/environment';

const BASE_URL = environment.production ? '' : 'http://localhost:3003';

export const JOBS_URL = BASE_URL + '/jobs';
export const JOBS_BY_ID_URL = JOBS_URL + '/';
// export const JOBS_TAGS_URL = JOBS_URL + '/tags';
