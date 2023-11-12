const expressionInput = document.querySelector("#expressionInput");

expressionInput.addEventListener("input", handleExpressionInput);

function handleExpressionInput() {
  const expression = expressionInput.value;
  if (expression.trim() !== "") {
    try {
      const result = eval(expression);

      activeElement.innerText = result;
      state[activeElement.id] = { ...state[activeElement.id], value: result };
    } catch (error) {
      console.error("Error evaluating expression:", error);
    }
  }
}
