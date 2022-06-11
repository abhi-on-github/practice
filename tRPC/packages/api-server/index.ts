import express from "express";
import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import { z } from 'zod';
import { EventEmitter } from 'events';
import { Subscription } from "@trpc/server";

const ee = new EventEmitter();

interface ChatMessage {
  user: string;
  message: string;
}

const messages: ChatMessage[] = [
  {user: "user1", message: "Hello"},
  {user: "user2", message: "Hi"}
]

const appRouter = trpc.router()
  .query("hello", {
    resolve(){
      return "Hello world III";
    }
  })
  .query("getMessages", {
    input: z.number().default(10),
    resolve({ input }) {
      return messages.slice(-input);
    },
  })
  .mutation('addMessage', {
    input: z.object({
      user: z.string(),
      message: z.string(),
    }),
    resolve({ input }) {
      messages.push(input);
      ee.emit("add", input)
      return input;
    }
  })
  .subscription("onAdd", {
    resolve() {
      return new Subscription<ChatMessage>((emit) => {
        const onAdd = (data: ChatMessage) => {
          emit.data(data);
        };
        ee.on("add", onAdd);
        return () => {
          ee.off("add", onAdd);
        }
      })
    },
  });

export type AppRouter = typeof appRouter;

const app = express();
app.use(cors());
const port = 8080;

app.use('/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
  })
);

app.get("/", (req, res) => {
  res.send("Hello from api-server");
});

app.listen(port, () => {
  console.log(`api-server listening at http://localhost:${port}`);
});
