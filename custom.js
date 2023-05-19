exports.operation = function (a, b, c) {
    let result
    switch (a) {
        case "mul":
            result = b * c;
            break;

        case "Add":
            result = b + c;
            break;

        case "sub":
            result = b - c;
            break;

        default:
            break;
        }
        return result;
}