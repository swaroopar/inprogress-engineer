# Terminologies

In the field of prompt engineering, there are many terminologies.
This page tries to summarize them add a short and easy explanation about each,
so that it becomes easy to remember and stays in memory longer.

1. **step-by-step prompting** - here the prompt already contains the step by step method to be followed.

2. **Chain-of-Thought prompting** - here the prompt is extended with additional text such as - 'Think step by step'.
   This is mostly **zero-shot** - without no examples provided , or **few-shot** where multiple example are provided.

3. **prompt chaining** - Here the task is split into multiple steps
   and output of first step is sent as a prompt to next step.

4. **ReAct** - Reason and Act
   Reasoning - The verb here means, the analysis performed by the LLM to take a certain path in solving an problem.
   Act - The action the LLM performs based on the reasons.

:::tip Reasoning Meaning
The **action of thinking** about something in a logical, sensible way.

This is something what the LLM solely performs.

Reason (taken from the chain of thought) -> act -> observe -> iterate until all steps in the chain are completed.
:::

Reason to Act - Reasoning to finally do some action.
and Act to Reason - Performing actions to enhance reasoning. This is where the tool usage comes in.

5. **Prompt Sensitivity** - Even a small change to the prompt can lead to different answers from LLMs.

6. **heuristic** - It's a shortcut for thinking. Intuition, gut feel, etc.

7. **Agent Strategy** - Agent strategy means what LLM to use, what tools to use, which prompting strategy, etc.

:::important What's an agent?
Agent is the LLM plus the entire system surrounding it - Chat bot, tools, databases, memory, etc.
:::

:::tip paper links

- [Chain-of-Thought prompting](https://arxiv.org/abs/2201.11903)
- [ReAct: Reason + Act](https://arxiv.org/abs/2210.03629)
  :::
