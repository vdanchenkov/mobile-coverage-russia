import { Buffer } from 'buffer/'

export default async (url) => new Buffer(await (await fetch(url)).arrayBuffer())
