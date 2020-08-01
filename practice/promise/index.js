function doAsyncTask1(successHandler, failureHandler) {
}

const doAsyncTask1 = (successHandler, failureHandler) => {
    setTimeout(() => {
        successHandler("doAsyncTask1")
    }, 1000);
}

const doAsyncTask2 = (value, successHandler, failureHandler) => {
    console.log('doAsyncTask2 value: ' + value);
    setTimeout(() => {
        successHandler("doAsyncTask2")
    }, 1000);
}

const doAsyncTask3 = (value, successHandler, failureHandler) => {
    console.log('doAsyncTask3 value: ' + value);
    setTimeout(() => {
        successHandler("doAsyncTask3")
    }, 1000);
}

const failureHandler = (error) => {
    console.log("error: " + error);
}

(function() {
    doAsyncTask1((result) => {
        doAsyncTask2(result, (newResult) => {
            doAsyncTask3(newResult, (finalResult) => {
                console.log('final result: ' + finalResult);
            }, failureHandler);
        }, failureHandler);
    }, failureHandler);
})();