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

## Usage

To use this structure and the generator within, the project must have the following structure:

```plaintext
src/
  types/
    api/
      <type>.[request|response|validator].ts
    db/
      <name>.db.ts
    schemas/
      <name>.schema.ts
    types/
      (generated)
    messaging/
      errors/
        <type>.ts
      events/
        <type>.ts
      logs/
        <type>.ts
```