import { parse } from "https://deno.land/std@0.127.0/flags/mod.ts";

const args = parse(Deno.args, {
  default: {
    name: "petrified-wood",
    uri: "fossil://root:root@localhost:1234?type=vault",
  },
});

const name = args.name as string;
const uri = args.uri as string;
const command = args._ as Array<string>;

console.log(`Command: ${command[0]}, Name: ${name}, URI: ${uri}`);
