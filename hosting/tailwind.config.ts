import type { Config } from "tailwindcss";
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

export default {
  content: ["./src/**/*.{html,js,svelte,ts}",
    join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )],

  theme: {
    extend: {}
  },

  plugins: [skeleton({
    themes: { preset: ["skeleton"] }
  }),
  require("@tailwindcss/typography")]
} as Config;
