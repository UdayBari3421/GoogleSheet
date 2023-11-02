const expressionInput = document.querySelector("#expressionInput");

expressionInput.addEventListener("input", handleExpressionInput);

function handleExpressionInput() {
  const expression = expressionInput.value;

  // Check if the expression is not empty
  if (expression.trim() !== "") {
    try {
      // Evaluate the expression using JavaScript eval function
      const result = eval(expression);

      // Display the result in the active cell
      activeElement.innerText = result;

      // Update the state with the evaluated result
      state[activeElement.id] = { ...state[activeElement.id], value: result };
    } catch (error) {
      console.error("Error evaluating expression:", error);
    }
  }
}
