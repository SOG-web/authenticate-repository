# authora

Authora is an auth library written in TypeScript that abstracts away the complexity of handling sessions. It works alongside your database to provide an API that's easy to use, understand, and extend.

-   No more endless configuration and callbacks
-   Fully typed
-   Works in any runtime - Node.js, Bun, Deno, Cloudflare Workers
-   Extensive database support out of the box

```ts
import { Authora } from "Authora";

const Authora = new Authora(new Adapter(db));

const session = await Authora.createSession(userId, {});
await Authora.validateSession(session.id);
```

Authora is an open source library released under the MIT license, with the help of [100+ contributors](https://github.com/Authora-auth/Authora/graphs/contributors)!

## Resources

**[Documentation](https://authora.com)**

**[Examples](https://github.com/Authora-auth/examples)**

**[Changelog](https://github.com/SOG-web/authenticate-repository/blob/main/packages/Authora/CHANGELOG.md)**

## Installation

```
npm i authora
pnpm add authora
yarn add authora
```
