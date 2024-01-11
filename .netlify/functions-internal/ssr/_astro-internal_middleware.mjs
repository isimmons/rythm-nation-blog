;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1cd5494-21bc-49f9-9df3-f8fcef9210a3",e._sentryDebugIdIdentifier="sentry-dbid-b1cd5494-21bc-49f9-9df3-f8fcef9210a3")}catch(e){}}();import 'kleur/colors';
import './chunks/astro_2WJtSRFU.mjs';
import 'clsx';
import 'cookie';
import { onRequest as onRequest$1 } from '@sentry/astro/middleware';

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
//# sourceMappingURL=_astro-internal_middleware.mjs.map
