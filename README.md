# authora

Authora is an auth library written in TypeScript that abstracts away the complexity of handling sessions. It works alongside your database to provide an API that's easy to use, understand, and extend.

# Documentation not yet completed for this package so please proceed with caution. also still under testing

-   No more endless configuration and callbacks
-   Fully typed
-   Works in any runtime - Node.js, Bun, Deno, Cloudflare Workers
-   Extensive database support out of the box

```ts
import { Authora } from "authora";

const Authora = new Authora(new Adapter(db));

const session = await Authora.createSession(userId, {});
await Authora.validateSession(session.id);
```

Authora is an open source library released under the MIT license, with the help of [100+ contributors](https://github.com/Authora-auth/Authora/graphs/contributors)!

## Resources

**[Documentation](https://rou-technology.gitbook.io/authora-docs/)**

**[Changelog](https://github.com/SOG-web/authenticate-repository/blob/main/packages/authora/CHANGELOG.md)**

## Installation

```
npm i authora
pnpm add authora
yarn add authora
```
