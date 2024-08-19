const configManager = require('./configManager');

const config = configManager.getConfig()

const addExpand = (url, expand) => {
    if (expand) {
        return `${url}expand=property:${expand}&`;
    }

    return url
}

const addFilter = (url, filter) => {
    if (filter) {
        return `${url}filter=contentType:${filter}&`;
    }

    return url
}

const callContentDeliveryAPI = async (url) => {

    let items;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'api-key': config.apiKey,
                'Start-Item': config.my_portfolio_Route_path
          }});

        items = response.json();
        console.log(items);

        } catch (e) {
            console.log(e)
        }

      return items;
}

export async function fetchItems({filter=null}) {
    let url = `${config.domain}/umbraco/delivery/api/v2/content/?`;
    //url = addExpand(url, expand);
    url = addFilter(url, filter);

    console.log(url);
    return callContentDeliveryAPI(url);

}

export async function fetchItem(pathOrId, expand) {

    let url = `${config.domain}/umbraco/delivery/api/v2/content/item/${pathOrId}?`;
   // url = addExpand(url, expand);

    console.log(url, config.apiKey);

    return callContentDeliveryAPI(url);
}