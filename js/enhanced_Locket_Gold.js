const url = $request.url;
const method = $request.method;
const headers = $request.headers;
const body = $request.body;

if (url.includes("/receipts") || url.includes("/subscribers")) {
    let modifiedBody = JSON.parse(body);
    modifiedBody.subscriber.entitlements = {
        "premium": {
            "expires_date": "2099-12-31T23:59:59Z",
            "product_identifier": "locket.premium",
            "purchase_date": "2023-01-01T00:00:00Z"
        }
    };
    modifiedBody.subscriber.subscriptions = {
        "com.yourcompany.premium": {
            "expires_date": "2099-12-31T23:59:59Z",
            "original_purchase_date": "2023-01-01T00:00:00Z",
            "purchase_date": "2023-01-01T00:00:00Z"
        }
    };

    $done({ body: JSON.stringify(modifiedBody) });
} else {
    $done({});
}