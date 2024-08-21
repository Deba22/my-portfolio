const configManager = require('./configManager');

const config = configManager.getConfig()

const addExpand = (url, expand) => {
    if (expand) {
        return `${url}expand=property:${expand}&`;
    }

    return url
}

const addSort = (url, sort) => {
    if (sort) {
        return `${url}sort=${sort}&`;
    }

    return url
}

const addFilter = (url, filter) => {
    if (filter) {
        return `${url}filter=contentType:${filter}&`;
    }

    return url
}

const callContentDeliveryAPI = async (url, preview) => {

    let items;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Preview':preview,
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

export async function fetchItems({filter=null,sort=null}) {
    let url = `${config.umbraco_domain}/umbraco/delivery/api/v2/content/?`;
    //url = addExpand(url, expand);
    url = addSort(url, sort);
    url = addFilter(url, filter);

    console.log(url);
    return callContentDeliveryAPI(url,false);

}
export async function fetchDraftItems({filter=null}) {
    let url = `${config.umbraco_domain}/umbraco/delivery/api/v2/content/?`;
    //url = addExpand(url, expand);
    url = addFilter(url, filter);

    console.log(url);
    return callContentDeliveryAPI(url,true);

}

export async function fetchItem(pathOrId, expand) {

    let url = `${config.umbraco_domain}/umbraco/delivery/api/v2/content/item/${pathOrId}?`;
   // url = addExpand(url, expand);

    console.log(url, config.apiKey);

    return callContentDeliveryAPI(url,false);
}

export async function fetchDraftItem(pathOrId, expand) {

    let url = `${config.umbraco_domain}/umbraco/delivery/api/v2/content/item/${pathOrId}?`;
   // url = addExpand(url, expand);

    console.log(url, config.apiKey);

    return callContentDeliveryAPI(url,true);
}