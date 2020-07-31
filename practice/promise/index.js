function doAsyncTask1(successHandler, failureHandler) {
    setTimeout(function() {
        successHandler("doAsyncTask1")
    }, 1000);
}

function doAsyncTask2(value, successHandler, failureHandler) {
    console.log('doAsyncTask2 value: ' + value);
    setTimeout(function() {
        successHandler("doAsyncTask2")
    }, 1000);
}

function doAsyncTask3(value, successHandler, failureHandler) {
    console.log('doAsyncTask3 value: ' + value);
    setTimeout(function() {
        successHandler("doAsyncTask3")
    }, 1000);
}

function failureHandler(error) {
    console.log("error: " + error);
}

(function() {
    doAsyncTask1(function(result) {
        doAsyncTask2(result, function(newResult) {
            doAsyncTask3(newResult, function(finalResult) {
                console.log('final result: ' + finalResult);
            }, failureHandler);
        }, failureHandler);
    }, failureHandler);
})();