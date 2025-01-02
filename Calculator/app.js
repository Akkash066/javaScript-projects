const _buttons = document.getElementsByTagName("button");
const _length = _buttons.length;
const _result = document.getElementById("result");

// Function to check if the last character is an operator
function isLastCharOperator(value) {
    return ["+", "-", "*", "/"].includes(value[value.length - 1]);
}

// Add event listeners to buttons
for (let i = 0; i < _length; i++) {
    _buttons[i].onclick = indicator;
}

// Handle button clicks
function indicator() {
    let _value = this.innerHTML;

    if (_value === "C") {
        // Clear result on "C" button click
        _result.value = "";
        return;
    }

    if (_value === "=") {
        // Evaluate the result on "=" button click
        try {
            _result.value = eval(_result.value);
        } catch (e) {
            _result.value = "0";
        }
        return;
    }

    if (["+", "-", "*", "/"].includes(_value)) {
        // Prevent consecutive operators
        if (isLastCharOperator(_result.value)) {
            return; // Ignore if last character is already an operator
        }
    }
    // Append clicked value to result
    _result.value += _value;
}
