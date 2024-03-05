# Zod First SST Demo - Types Repository

This repository is part of a 3-repo demo using Zod as a Single Source of Truth (SST) for types in a Full-Stack TypeScript project.

## Overview

This repository contains the types for the Full-Stack TypeScript project. It is the source of truth for the types used in the project.

![](docs/zod-sst.svg)

## Required Generators

- `typescript` - zod native
- `mongoose` - [zod to mongoose](https://github.com/git-zodyac/mongoose)
- `OpenAPI Spec` - [zod to openapi](https://github.com/asteasolutions/zod-to-openapi)
- `Request Types` - zod native
- `Messaging` - zod native
  - `Errors`
  - `Events`
  - `Logs`

## Types

### `User`

The `User` type represents a user in the system.

```typescript
interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  hobbies: string[];
}
```
