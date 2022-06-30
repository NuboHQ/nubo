/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { InnerRenderFunction, RenderContext, start } from '$fresh/server.ts';
import manifest from './fresh.gen.ts';

import { config as twindConfig, setup } from '@twind';
import { virtualSheet } from 'twind/sheets';
import { logger } from './deps.ts';
import { config } from './config.ts';

logger.init({ name: config.name });

const sheet = virtualSheet();
sheet.reset();
setup({
  ...twindConfig,
  sheet,
  theme: {},
});

function render(ctx: RenderContext, render: InnerRenderFunction) {
  const snapshot = ctx.state.get('twind') as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  ctx.styles.splice(0, ctx.styles.length, ...sheet.target);
  const newSnapshot = sheet.reset();
  ctx.state.set('twind', newSnapshot);
}

logger.info(`ready`);
await start(manifest, { render, port: config.port });
