import {get_id_by_cookie, get_followers_page} from '../utils'

export function add_users_dom(users, id_list="user-list"){
  const userList = document.getElementById(id_list);

  users.forEach(user => {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `user-${user.id}`;

    const label = document.createElement("label");
    label.setAttribute("for", `user-${user.id}`);
    label.className = "elemento-usuario";

    const picture = document.createElement("img");
    picture.src = user.profile_pic_url;
    picture.alt = `${user.username}`;

    const div_li_names = document.createElement("div");
    div_li_names.className = "div-li-names"

    const username = document.createElement("p");
    username.className = "username-text";
    username.textContent = `@${user.username}`;

    const fullname = document.createElement("p");
    fullname.className = "fullname";
    fullname.textContent = user.full_name;

    label.appendChild(picture);

    div_li_names.appendChild(username);
    div_li_names.appendChild(fullname);

    label.appendChild(div_li_names);

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    userList.appendChild(listItem);
  });
}

export async function cargar_usuarios(APP) {
  try {
    const userId = get_id_by_cookie()

    if (!userId) {
        console.error('User ID not found in cookies');
        return;
      }

    let after = null;
    let has_next = true;

    let cont = 0

    while (has_next) {
        const {followers_page, has_next : next_page, after : new_after} = await get_followers_page(userId, after)
        APP.actualFollowers = APP.actualFollowers.concat(followers_page) 

        has_next = next_page;
        after = new_after;
        
        if (cont >= 5 && has_next){
            cont = 0
            console.log("Esperando 10 segundos antes de continuar")
            await new Promise((resolve) => setTimeout(resolve, 10000));
        } else if(has_next){
            cont += 1
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
    }

  } catch (err) {
    console.log({ err });
  }
}
