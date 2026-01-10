import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { HttpAgent } from "@ag-ui/client";
import { NextRequest } from "next/server";

// Use empty adapter since we're only using one agent
const serviceAdapter = new ExperimentalEmptyAdapter();

const agentUrl = process.env.AGENT_URL || "http://localhost:8000/agui/";

// Log the agent URL at startup
console.log("[CopilotKit API] Initializing with agent URL:", agentUrl);

// Create the CopilotRuntime with our Pydantic AI agent
const runtime = new CopilotRuntime({
  agents: {
    hitl_agent: new HttpAgent({
      url: agentUrl
    }),
  },
});

// Next.js API route handler
export const POST = async (req: NextRequest) => {
  console.log("[CopilotKit API] Received POST request");

  try {
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime,
      serviceAdapter,
      endpoint: "/api/copilotkit",
    });

    const response = await handleRequest(req);
    console.log("[CopilotKit API] Response status:", response.status);
    return response;
  } catch (error) {
    console.error("[CopilotKit API] Error:", error);
    throw error;
  }
};
