# AI Agent Levels

## Agents and Assistants

AI Agent or AI assistant is a generic word used to describe a system that interacts with an LLM.
It takes the input from the user and then generates the output using LLM and the tools available.

:::tip Example of agents and assistants
ChatGPT, Gemini, etc.

AI agents are the most commonly used name for systems that interact with LLMs.
:::

:::warning Agent vs Assistant
Both agent and assistant are terms used interchangeably.
But there is a very subtle difference between them.
To understand this, we need to consider the real world meanings of these two terms.

Always think of assistant as a **personal assistant** who has limited powers.

Whereas an **agent/agency** have more independent powers.
We only ask an agent to do something on our behalf.
:::

### Assistant Messages

All messages generated from an LLM are grouped under the role 'assistant'.
Under this, all CoT reasoning, tool calls and results, sub-agent calls are grouped.

## Agentic AI

They're systems which takes a specific goal from the user and then
performs a series of actions to achieve that goal.

Reasoning -> Planning -> Execution

:::danger Agentic AI vs AI Agent
All agentic AI systems are AI agents, but not all AI agents are agentic AI systems.

AI agent can be any system that interacts with an LLM.

AI agent is reactive whereas agentic AI is proactive.
:::

Example - If we want to book a holiday, the agent will first reason about the
flight booking process, then plan the steps to book the flight and
then the hotels and then do them accordingly without any human intervention.

## Agent autonomous levels

The below picture describes autonomy levels from lowest to highest.

![agent-levels](../../static/img/agent-levels.excalidraw.png)
