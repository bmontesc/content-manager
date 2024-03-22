const apiURL = 'https://content-manager-ihgp4c2pia-no.a.run.app/contents'

export const getContents = () => {
    return fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los datos del plan');
            }
            return response.json();
    })
    .then(data => {
        return Object.values(data).map(object => ({
            id: object.local_id,
            title: object.title,
            status: object.status,
            countryCode: object.country_code,
            buyerProfile: object.buyer_profile,
            link: object.link
        }));
    })
    .catch(error => {
        console.error('Error en la solicitud:', error.message);
        throw error;
      });
}