
    
    
        
        function clearOutput() {
            document.getElementById("output").value = "0";
        }

        function appendToOutput(value) {
            var currentOutput = document.getElementById("output").value;
            if (currentOutput === "0" && value !== "+" && value !== "-" && value !== "*" && value !== "/") {
                document.getElementById("output").value = value;
            } else {
                document.getElementById("output").value += value;
            }
        }

        function calculate() {
            try {
                var expression = document.getElementById("output").value;
                var result = eval(expression);
                document.getElementById("output").value = result;
            } catch (error) {
                document.getElementById("output").value = "Error";
            }
        }
  