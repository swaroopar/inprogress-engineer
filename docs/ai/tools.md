# Tools

1. Toolformer - Process where the model is fine-tuned to use tools.
2. Function calling - A method where the model can call functions to get information or perform actions.
3. MCP - Exactly same as function calling, just adds standards to function calling.

:::important Route of API request flow
In case of Toolformer, the API request is sent to the LLM and then the LLM calls the external API.
In case of function calling and MCP, the LLM asks the client to call the external API and
then the client calls the external API and sends the response back to the LLM.
:::

![function-calling](../../static/img/function-calling-mcp.excalidraw.png)
