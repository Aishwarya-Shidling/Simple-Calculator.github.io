$(document).ready(function () {
    let calc = "";
    let clear = false;

    $("button").click(function () {
        let text = $(this).val();

        if (!isNaN(text) || text === "." || ["+", "-", "*", "/", "%"].includes(text)) {
            if (clear) {
                calc = text;
                clear = false;
            } else {
                calc += text;
            }
            $("#screen").val(calc);
        } else if (text === "=") {
            try {
                calc = eval(calc).toString();
                $("#screen").val(calc);
                clear = true;
            } catch (e) {
                $("#screen").val("Error");
                calc = "";
            }
        } else if (text === "AC") {
            calc = "";
            $("#screen").val("");
        } else if (text === "CE") {
            calc = calc.slice(0, -1);
            $("#screen").val(calc);
        }
    });
});
