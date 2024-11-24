class Interfaz {
    constructor(indexContent) {
        console.log("ENTRA A INTERFAZ CONSTRUCTOR")
        document.body.innerHTML = indexContent;
    }

    render_comparacion_followers(left_followers, new_followers){
        // DEBE HABERSE INSERTADO EL LIST HTML
        const leftFollowersExist = left_followers.length > 0
        const newFollowersExist = new_followers.length > 0

        const section_list = document.getElementById("user-list");
        const button_list = document.getElementById("menu-buttons-list");

        const h1_title = document.getElementById("h1-list");
        h1_title.textContent = "New and Left Followers"

        let text_content = "There are no left followers"
        if (leftFollowersExist) {
          text_content = "Left Followers"
        }

        // Añadir H2 de left followers
        

        const left_followers_h2 = document.createElement("h2");
        left_followers_h2.textContent = text_content
        section_list.appendChild(left_followers_h2);


        if (leftFollowersExist) {
          this.add_users_to_list(left_followers, 'user-list')
        }

        // NEW FOLLOWERS
        text_content = "There are no new followers"
        if (newFollowersExist) {
          text_content = "New Followers"
        }

        // Añadir H2 de left followers
        const new_followers_h2 = document.createElement("h2");
        new_followers_h2.textContent = text_content
        section_list.appendChild(new_followers_h2);

        if (newFollowersExist) {
            this.add_users_to_list(new_followers, 'user-list')
        }

        // AÑADIR BOTONES DESCARGA
        const button_download_all_followers = document.createElement('button');
        button_download_all_followers.id = 'button-download-all-followers'
        button_download_all_followers.textContent = 'Download Actual Followers';
        button_download_all_followers.classList.add('custom-button');

        const button_download_left_followers = document.createElement('button');
        button_download_left_followers.id = 'button-download-left-followers'
        button_download_left_followers.textContent = 'Download Left Followers';
        button_download_left_followers.classList.add('custom-button');

        const button_download_new_followers = document.createElement('button');
        button_download_new_followers.id = 'button-download-new-followers'
        button_download_new_followers.textContent = 'Download New Followers';
        button_download_new_followers.classList.add('custom-button');


        // // AÑADIR BOTÓN DE UNFOLLOW
        // const button_unfollow_selected = document.createElement('button');
        // button_unfollow_selected.id = 'button-unfollow-selected'
        // button_unfollow_selected.textContent = 'Unfollow Selected';
        // button_unfollow_selected.classList.add('custom-button');
        // button_unfollow_selected.classList.add('unfollow-button');

        const aux0_li = document.createElement('li');
        const aux1_li = document.createElement('li');
        const aux2_li = document.createElement('li');
        // const aux3_li = document.createElement('li');

        aux0_li.appendChild(button_download_left_followers)
        aux1_li.appendChild(button_download_new_followers)
        aux2_li.appendChild(button_download_all_followers)
        // aux3_li.appendChild(button_unfollow_selected)


        button_list.appendChild(aux0_li)
        button_list.appendChild(aux1_li)
        button_list.appendChild(aux2_li)
        // button_list.appendChild(aux3_li)
    }

    render_actual_followers(actual_followers){
        console.log("Entra a Render Actual Followers")
        const h1_title = document.getElementById("h1-list");
        h1_title.textContent = "Actual Followers"

        const actualFollowersExist = actual_followers.length > 0

        const button_list = document.getElementById("menu-buttons-list");
        

        if (actualFollowersExist) {
            this.add_users_to_list(actual_followers, 'user-list')
        } else{
            const section_list = document.getElementById("user-list");
            const empty_h2 = document.createElement("h2");
            empty_h2.textContent = "No users found"
            section_list.appendChild(empty_h2);
        }
        
        // AÑADIR BOTONES DESCARGA
        const button_download_all_followers = document.createElement('button');
        button_download_all_followers.id = 'button-download-all-followers'
        button_download_all_followers.textContent = 'Download Actual Followers';
        button_download_all_followers.classList.add('custom-button');

        // // AÑADIR BOTÓN DE UNFOLLOW
        // const button_unfollow_selected = document.createElement('button');
        // button_unfollow_selected.id = 'button-unfollow-selected'
        // button_unfollow_selected.textContent = 'Unfollow Selected';
        // button_unfollow_selected.classList.add('custom-button');
        // button_unfollow_selected.classList.add('unfollow-button');
        

        // LI DE BOTONES
        const aux0_li = document.createElement('li');
        const aux1_li = document.createElement('li');
        // const aux2_li = document.createElement('li');

        aux0_li.appendChild(button_download_all_followers)
        aux1_li.appendChild(button_unfollow_selected)
        // aux2_li.appendChild(button_unfollow_selected)

        button_list.appendChild(aux0_li)
        button_list.appendChild(aux1_li)
        // button_list.appendChild(aux2_li)
    }

    render_uploaded_list(usersList){
        const h1_title = document.getElementById("h1-list");
        h1_title.textContent = "Uploaded Users"

        const usersListExist = usersList.length > 0

        const button_list = document.getElementById("menu-buttons-list");
        

        if (usersListExist) {
            this.add_users_to_list(usersList, 'user-list')
        } else{
            const section_list = document.getElementById("user-list");
            const empty_h2 = document.createElement("h2");
            empty_h2.textContent = "No users found"
            section_list.appendChild(empty_h2);
        }

        // // AÑADIR BOTÓN DE UNFOLLOW
        // const button_unfollow_selected = document.createElement('button');
        // button_unfollow_selected.id = 'button-unfollow-selected'
        // button_unfollow_selected.textContent = 'Unfollow Selected';
        // button_unfollow_selected.classList.add('custom-button');
        // button_unfollow_selected.classList.add('unfollow-button');
        // button_list.appendChild(button_unfollow_selected)

        // // LI DE BOTONES
        // const aux1_li = document.createElement('li');
        // aux1_li.appendChild(button_unfollow_selected)
        // button_list.appendChild(aux1_li)
    }

    



    insertarListHTML() {
        document.body.innerHTML = `
            <div id="list-html">
                <header>
                    <h1 id="h1-list">Loading Users List... This may take a few seconds</h1>
                </header>
                <main>
                    <section class="checkbox-list" id="checkbox-list-base">
                        <ul id="user-list">
                        </ul>
                    </section>
                    <aside class="menu">
                        <h2>Actions</h2>
                        <ul id="menu-buttons-list">
                        </ul>
                    </aside>
                </main>
            </div>
        `;
    }

    add_users_to_list(users, id_list){
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

    eliminarElemento(id) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.remove()
        }
    }
}

export default Interfaz