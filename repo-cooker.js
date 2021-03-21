// eslint-disable-next-line import/named
import { Cooker } from 'repo-cooker';

process.env.REPO_COOKER_GITHUB_TOKEN = process.env.GH_TOKEN;

export const cooker = Cooker(process.argv, {
  devtools: {
    host: 'localhost:8787'
  },
  path: '.',
  packagesGlobs: ['packages/@volue/*']
});
