export const apiURL = 'http://127.0.0.1:8000'

export const getContents = (country = null, buyerProfile = null, status = null, title = null, pag = 0) => {

    let url = apiURL + '/contents?'
    if (country !== null && country !== '---') url = url + `code_country=${country}&`
    if (buyerProfile !== null && buyerProfile !== '---') url = url + `buyer_profile=${buyerProfile}&`
    if (status !== null && status !== '---') url = url + `status=${status}&`
    if (title !== null) url = url + `title=${title}&`

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
            id: object.id,
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

export const getContent = (id) => {
    console.log(id)
    let url = apiURL + `/contents/${id}`

    return fetch(`${url}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los contenidos');
            }
            return response.json();
    })
    .then(data => {
        console.log(data)
        return data;
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
}


export const getCountries = () => {

    let url = apiURL + '/country_codes'
    return fetch(url)
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
    return fetch(`${apiURL}/statuses`)
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
    return fetch(`${apiURL}/buyer_profiles`)
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

export const getTranslatedContents = (country = null, buyerProfile = null, status = null, pag = 0) => {

    let url = apiURL + '/translations?'
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
            id: object.id,
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

export const getContentManagers = () => {

    let url = apiURL + '/users/content_managers'
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los content managers');
            }
            return response.json();
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
}


export const getPlanningStatus = () => {

    let url = apiURL + '/planningstatus'
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los planning status');
            }
            return response.json();
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
}
