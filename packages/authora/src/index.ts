export { Authora } from "./core.js";
export { Scrypt, LegacyScrypt, generateId, generateIdFromEntropySize } from "./crypto.js";
export { TimeSpan } from "oslo";
export { Cookie } from "oslo/cookie";
export { verifyRequestOrigin } from "oslo/request";

export type {
	User,
	Session,
	SessionCookieOptions,
	SessionCookieAttributesOptions
} from "./core.js";
export type { DatabaseSession, DatabaseUser, Adapter } from "./database.js";
export type { PasswordHashingAlgorithm } from "./crypto.js";
export type { CookieAttributes } from "oslo/cookie";

import type { Authora } from "./core.js";

export type { JWTOptions, CreatedToken, VerifiedToken } from "./core.js";

export interface Register {}

export type UserId = Register extends {
	UserId: infer _UserId;
}
	? _UserId
	: string;

export type RegisteredAuthora = Register extends {
	Authora: infer _Authora;
}
	? _Authora extends Authora<any, any>
		? _Authora
		: Authora
	: Authora;

export type RegisteredDatabaseUserAttributes = Register extends {
	DatabaseUserAttributes: infer _DatabaseUserAttributes;
}
	? _DatabaseUserAttributes
	: {};

export type RegisteredDatabaseSessionAttributes = Register extends {
	DatabaseSessionAttributes: infer _DatabaseSessionAttributes;
}
	? _DatabaseSessionAttributes
	: {};
