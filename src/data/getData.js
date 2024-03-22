const apiURL = 'https://content-manager-ihgp4c2pia-no.a.run.app'

export const getContents = (country = null, buyerProfile = null, status = null, pag = 1) => {

    let url = apiURL + '/contents?'
    if (country !== null && country !== '---') url = url + `code_country=${country}&`
    if (buyerProfile !== null && buyerProfile !== '---') url = url + `buyer_profile=${buyerProfile}&`
    if (status !== null && status !== '---') url = url + `status=${status}&`

    url = url + 'pag=' + pag

    return fetch(`${url}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los contenidos');
            }
            return response.json();
    })
    .then(data => {
        return Object.values(data).map(object => ({
            id: object.local_id,
            Title: object.title,
            Status: object.status,
            Country_Code: object.country_code,
            Buyer_Profile: object.buyer_profile,
            Link: object.link
        }));
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
}

export const getCountries = () => {
    return fetch(`${apiURL}/contents/country_codes`)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los paises');
            }
            return response.json();
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
}

export const getStatuses = () => {
    return fetch(`${apiURL}/contents/statuses`)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los paises');
            }
            return response.json();
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
}

export const getBuyerProfiles = () => {
    return fetch(`${apiURL}/contents/buyer_profiles`)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los paises');
            }
            return response.json();
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
}

export const getTranslatedContents = (country = null, buyerProfile = null, status = null, pag = 1) => {

    let url = apiURL + '/contents/translations?'
    if (country !== null && country !== '---') url = url + `code_country=${country}&`
    if (buyerProfile !== null && buyerProfile !== '---') url = url + `buyer_profile=${buyerProfile}&`
    if (status !== null && status !== '---') url = url + `status=${status}&`

    url = url + 'pag=' + pag

    return fetch(`${url}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los contenidos');
            }
            return response.json();
    })
    .then(data => {
        return Object.values(data).map(object => ({
            id: object.local_id,
            Title: object.title,
            Status: object.status,
            Country_Code: object.country_code,
            Buyer_Profile: object.buyer_profile,
            Link: object.link
        }));
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
}