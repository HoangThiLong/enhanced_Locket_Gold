const url = $request.url;
const method = $request.method;
const headers = $request.headers;

if (url.includes("/receipts") || url.includes("/subscribers")) {
    delete headers["Authorization"];
    delete headers["X-RevenueCat-Version"];
    delete headers["X-RevenueCat-Platform"];

    $done({ headers });
} else {
    $done({});
}