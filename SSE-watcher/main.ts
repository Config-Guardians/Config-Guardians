import { EventSource } from "eventsource"

const source = new EventSource("http://hachiware:4000/sse")

source.addEventListener("message", e => {
  console.dir(JSON.parse(e.data), { depth: null })
})
