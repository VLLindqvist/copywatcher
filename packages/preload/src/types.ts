/* eslint-disable @typescript-eslint/consistent-type-imports */

export interface Exposed {
  readonly nodeCrypto: Readonly<typeof import("./nodeCrypto").nodeCrypto>;
  readonly versions: Readonly<typeof import("./versions").versions>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Window extends Exposed {}
