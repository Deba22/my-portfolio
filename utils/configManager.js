export const getConfig  = () => {

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const apiKey = process.env.UMBRACO_API_KEY
    const domain = process.env.NEXT_PUBLIC_UMBRACO_DOMAIN;
    const my_portfolio_Route_path = process.env.MY_PORTFOLIO_ROUTE_PATH

    return {
        apiKey,
        domain,
        my_portfolio_Route_path
    }
}

module.export = {
    getConfig: getConfig
}