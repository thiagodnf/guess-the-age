
let m0 = [[1, 3, 5, 7, 9, 11, 13, 15], [17, 19, 21, 23, 25, 27, 29, 31], [33, 35, 37, 39, 41, 43, 45, 47], [49, 51, 53, 55, 57, 59, 61, 63]]
let m1 = [[2, 3, 6, 7, 10, 11, 14, 15], [18, 19, 22, 23, 26, 27, 30, 31], [34, 35, 38, 39, 42, 43, 46, 47], [50, 51, 54, 55, 58, 59, 62, 63]]
let m2 = [[4, 5, 6, 7, 12, 13, 14, 15], [20, 21, 22, 23, 28, 29, 30, 31], [36, 37, 38, 39, 44, 45, 46, 47], [52, 53, 54, 55, 60, 61, 62, 63]]
let m3 = [[8, 9, 10, 11, 12, 13, 14, 15], [24, 25, 26, 27, 28, 29, 30, 31], [40, 41, 42, 43, 44, 45, 46, 47], [56, 57, 58, 59, 60, 61, 62, 63]]
let m4 = [[16, 17, 18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29, 30, 31], [48, 49, 50, 51, 52, 53, 54, 55], [56, 57, 58, 59, 60, 61, 62, 63]]
let m5 = [[32, 33, 34, 35, 36, 37, 38, 39], [40, 41, 42, 43, 44, 45, 46, 47], [48, 49, 50, 51, 52, 53, 54, 55], [56, 57, 58, 59, 60, 61, 62, 63]]

let matrices = [m0, m1, m2, m3, m4, m5];

function getLine(array) {

    let str = "";

    str += "<div class='row text-center mt-3'>";
    str += "<div class='col-2'></div>";

    for (let i in array) {
        str += "<div class='col-1'>" + array[i] + "</div>";
    }

    str += "<div class='col-2'></div>";
    str += "</div>";

    return str;
}

function printMatrixWithoutEffect(matrix) {

    let str = "";

    for (let i in matrix) {
        str += getLine(matrix[i]);
    }

    $(".matrix").html(str);
}

function printMatrix(matrix) {

    let str = "";

    for (let i in matrix) {
        str += getLine(matrix[i]);
    }

    $(".matrix").effect("fade", {}, 600, function () {
        $(this).html(str);
    })
}

function finish(soma) {

    $(".your-age").html(soma);

    $(".toolbox").addClass("d-none");
    $(".toolbox-again").removeClass("d-none");

    return;
}

$(function () {

    let soma = 0;

    let currentIndex = 0;

    printMatrixWithoutEffect(matrices[currentIndex]);

    $(".btn-yes").click(function (event) {
        event.preventDefault();

        soma += matrices[currentIndex][0][0];

        currentIndex++;

        if (currentIndex == 6) {
            return finish(soma);
        }

        printMatrix(matrices[currentIndex]);

        return false;
    });

    $(".btn-no").click(function (event) {
        event.preventDefault();

        currentIndex++;

        if (currentIndex == 6) {
            return finish(soma);
        }

        printMatrix(matrices[currentIndex]);

        return false;
    });

    $(".btn-refresh").click(function (event) {
        event.preventDefault();

        location.reload();

        return false;
    });
});
