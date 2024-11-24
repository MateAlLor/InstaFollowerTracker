export function get_id_by_cookie() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ds_user_id=`);
    if (parts.length !== 2) {
        return null;
    }
    return parts.pop().split(';').shift();
}

export function downloadJSON(data, filename) {
    const jsonString = JSON.stringify(data, null, 2);

    const blob = new Blob([jsonString], { type: 'application/json' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

export async function get_followers_page(userId, after) {
    try {
        const response = await fetch(
            `https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=` +
            encodeURIComponent(
                JSON.stringify({
                    id: userId,
                    include_reel: true,
                    fetch_mutual: true,
                    first: 50,
                    after: after,
                })
            )
        )

        const res = await response.json();

        const has_next = res.data.user.edge_followed_by.page_info.has_next_page;
        const new_after = res.data.user.edge_followed_by.page_info.end_cursor;

        const followers_page = res.data.user.edge_followed_by.edges.map(({ node }) => (
            {
                id: node.id,
                username: node.username,
                followed_by_viewer: node.followed_by_viewer,
                full_name: node.full_name,
                profile_pic_url: node.profile_pic_url,
            }
        ));

        return { followers_page, has_next, after: new_after }

    } catch (error) {
        console.error("Error fetching followers page:", error);
        return { followers_page: [], has_next: false, after: null };
    }
}

export function validarLista(lista) {
    lista.forEach(user => {

        if (!("id" in user && "username" in user && "full_name" in user && "profile_pic_url" in user)) {
            console.log('LISTA NO VÁLIDA')
            return false
        }
    });
    console.log('LISTA VALIDADA CORRECTAMENTE')
    return true
}

export function leerArchivoJson(event) {
    const file = event.target.files[0];

    if (file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = function (e) {
                try {
                    const jsonData = JSON.parse(e.target.result); // Procesa el JSON
                    console.log(jsonData)
                    resolve(jsonData); // Devuelve el JSON procesado
                } catch (error) {
                    reject('Error al procesar el archivo JSON: ' + error.message);
                }
            };

            reader.onerror = function () {
                reject('Error al leer el archivo.');
            };

            reader.readAsText(file);
        });
    } else {
        return Promise.reject('No se seleccionó ningún archivo.');
    }
}


export function obtenerFechaYHora(){
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `date-${year}-${month}-${day}_${hours}hs-${minutes}min-${seconds}s`;
    return formattedDate
}