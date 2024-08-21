export const getConfig  = () => {

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const apiKey = process.env.UMBRACO_API_KEY
    const umbraco_domain = process.env.NEXT_PUBLIC_UMBRACO_DOMAIN;
    const my_portfolio_Route_path = process.env.MY_PORTFOLIO_ROUTE_PATH;
    const nextjs_domain = process.env.NEXT_PUBLIC_NEXTJS_DOMAIN;

    return {
        apiKey,
        umbraco_domain,
        my_portfolio_Route_path,
        nextjs_domain
    }
}

module.export = {
    getConfig: getConfig
}