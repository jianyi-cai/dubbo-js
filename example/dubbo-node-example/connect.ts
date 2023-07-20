import { ConnectRouter } from "apache-dubbo";
import { ExampleService } from "./gen/example_dubbo";

export default (router: ConnectRouter) =>
  // registers apache.dubbo.demo.example.v1
  router.service(ExampleService, {
    // implements rpc Say
    async say(req) {
      return {
        sentence: `You said: ${req.sentence}`,
      };
    },
  });