import type { Config } from "tailwindcss";
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

const config = {
  darkMode: "selector",
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 3. Append the path to the Skeleton package
    join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],

  theme: {
    extend: {}
  },

  plugins: [
    skeleton({
      themes: { preset: [ "skeleton" ] }
    }
  ),
  require("@tailwindcss/typography")
  ],
  //require("@tailwindcss/typography")]
} satisfies Config;
export default config;
