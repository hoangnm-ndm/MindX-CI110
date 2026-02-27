import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={theme ? "light" : "dark"}>
      <div>
        <span>Đèn:</span>
        <div
          className="lightBulb"
          style={{
            backgroundColor: isOn ? "yellow" : "black",
          }}
        ></div>
      </div>
      <button onClick={toggleSwitch}>{isOn ? "Tat" : "Bat"}</button>
      <button onClick={changeTheme}>
        {theme ? "Dark mode" : "Light mode"}
      </button>
      <h1>Hello, buc thu tinh dau tien</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae commodi,
        dolorum facilis, corrupti consequuntur nesciunt earum nulla voluptas
        doloribus illo quas temporibus, qui exercitationem sit quo. Cupiditate
        tenetur fugiat quisquam, laborum quos ipsam voluptatem magnam autem
        saepe incidunt maiores laudantium earum architecto repellendus suscipit
        fuga praesentium veritatis reprehenderit nihil odio. Possimus dolorem
        nihil dolore, non necessitatibus, consequatur, fugiat itaque
        reprehenderit architecto corporis numquam cupiditate veniam eligendi.
        Laudantium odio explicabo reiciendis ab eos. Quaerat assumenda culpa id
        asperiores sapiente similique doloribus blanditiis a atque quisquam.
        Blanditiis, ullam ad! Reprehenderit neque debitis nihil vel autem
        voluptatem dolore maxime nam optio commodi quos illo veritatis laborum
        omnis, nostrum exercitationem ducimus cumque! Maiores molestias
        perferendis dolor totam exercitationem corrupti nam voluptatum ipsam
        deserunt rerum quae velit molestiae ducimus, nesciunt quam excepturi?
        Maxime, incidunt. Eligendi necessitatibus temporibus tempora voluptates
        minus reiciendis ab deserunt quo nulla fuga, esse atque velit dolore
        quia doloribus ut, itaque omnis odit voluptatum. Illum odio sint, nisi
        iusto vero voluptas praesentium enim optio eaque eveniet, ad at dolor
        dolores obcaecati voluptatibus. Sapiente officiis modi omnis expedita
        beatae ducimus alias ea, vel aliquid quod, commodi explicabo, fugit
        reprehenderit non. Nam perspiciatis dolores aspernatur voluptates ad,
        repellendus atque nesciunt hic suscipit odit eius aut quas a nihil dolor
        eaque delectus harum, ipsum minima quidem incidunt voluptatem maiores
        exercitationem placeat. Nulla eaque, ducimus consequuntur, iusto modi
        neque dolorem nam nostrum ipsa distinctio labore, inventore velit eos
        pariatur iste doloremque sit impedit accusantium itaque dicta sequi.
        Optio eos natus, temporibus tempora quibusdam laboriosam. Officia nobis
        aut illo omnis et exercitationem pariatur error quasi repellat, eum
        veniam quis quibusdam rerum. Omnis nihil autem ea fuga ratione error
        vitae asperiores, inventore quam, odio et repellat quidem beatae ab
        pariatur libero maxime distinctio nesciunt fugiat cupiditate aliquam
        esse illo similique. Consequatur repellat eos ipsum facere ratione
        consectetur iure aliquid quibusdam eveniet, sint quae consequuntur quam
        explicabo culpa debitis aperiam quasi eum neque aliquam repellendus
        fugiat eaque vero repudiandae. Cum, dolore consectetur! Culpa debitis
        non, mollitia asperiores nemo voluptatem. Natus libero ea aliquam,
        accusantium, laborum doloremque fugiat officia, tenetur quidem deleniti
        assumenda veritatis aperiam. Officiis et omnis laborum nesciunt maiores
        necessitatibus quasi sed provident sequi totam distinctio eum eveniet
        ducimus molestiae aliquid doloremque, accusamus aperiam ea, excepturi
        tempore dolores soluta impedit quibusdam? Soluta repellat dicta quis
        quas enim natus doloribus autem voluptatum distinctio dignissimos? Sint,
        fuga, libero cupiditate suscipit accusamus quisquam praesentium
        blanditiis exercitationem, quaerat perspiciatis modi error eaque? Iusto
        alias dolorem eum expedita perspiciatis quia impedit quisquam amet
        deleniti nostrum culpa doloribus ducimus reiciendis totam deserunt, fuga
        blanditiis ab in voluptatibus voluptates inventore ea itaque molestias
        eos. Amet sint, enim ipsa cupiditate reiciendis, tenetur sunt nostrum
        facilis, nemo nobis repellendus odio quos! Distinctio voluptatem eos
        accusamus totam, officiis id eius minus expedita temporibus asperiores
        dicta facere sit. Optio quo nihil odio, impedit magni voluptatem id illo
        ullam ut quia quos velit sint consequatur, debitis magnam pariatur
        numquam obcaecati quas. Beatae fuga modi corrupti voluptate rerum earum
        impedit? Sapiente necessitatibus, quod aut dicta accusantium neque ipsum
        rem amet consequatur sequi dignissimos deleniti a similique itaque autem
        sed tenetur? Minima, cum beatae ut voluptates facere accusamus. Possimus
        eius nemo impedit tempora ratione ea earum, quisquam delectus atque,
        beatae adipisci ipsam deleniti odit alias, eum quam. Nihil odit
        molestias asperiores ducimus voluptatem magni modi eaque repellat
        pariatur. Aliquid, incidunt deserunt minus cupiditate dolorum veniam
        commodi doloremque assumenda exercitationem suscipit. Aut totam
        laboriosam facere nihil id rerum eligendi. Obcaecati error unde rerum
        earum voluptas? Incidunt iste provident animi ipsa commodi laboriosam
        blanditiis laudantium repudiandae pariatur magni vel a, adipisci
        recusandae enim hic nemo, at labore voluptatibus officia cumque. Est
        odio, pariatur commodi laudantium assumenda corporis incidunt rem
        repudiandae sapiente reiciendis voluptates quidem culpa modi asperiores
        minima vero eos, enim deserunt soluta temporibus. Officia dicta, id eius
        ad dolor beatae qui molestias adipisci accusantium fuga? Illum
        reprehenderit itaque in consequuntur ducimus, quo dolor numquam
        consequatur culpa voluptate ex delectus nesciunt inventore perferendis.
        Provident porro quod suscipit sequi ut nobis nesciunt. Natus nobis sit
        quae temporibus, nostrum doloribus quia quaerat recusandae minima
        incidunt inventore. Voluptatibus illo sunt, architecto cumque ipsam
        impedit ad laudantium quasi! Voluptate impedit, facere exercitationem
        sit animi nihil vel veniam inventore laborum rerum ab. Sit totam sint,
        labore eos dolor nesciunt a exercitationem consectetur, minus veniam
        aliquam, velit veritatis ad unde non alias. Molestias ex omnis nostrum
        recusandae aliquid ea autem! A corrupti, nemo eum laboriosam quaerat
        eius eveniet perferendis doloribus minima autem quia alias sequi
        consectetur nobis ipsum illum veniam voluptatum ad sed molestias dolore
        suscipit veritatis iure rem. Magnam, quisquam ea cupiditate minus ex
        nemo recusandae impedit nam, libero placeat quidem expedita
        reprehenderit dignissimos modi labore dolores praesentium laudantium
        pariatur nisi, voluptatem doloribus reiciendis a voluptates eius! Saepe,
        dignissimos voluptatem, ipsam doloribus optio ducimus praesentium
        reiciendis consequatur accusantium sint repellat dicta adipisci labore
        nisi nulla, quod neque. Neque dolorem dolor quod alias deleniti. Autem
        facilis ipsam nobis, consequatur et quia est eveniet obcaecati,
        recusandae iste, dolorum quasi vitae ullam. Nihil voluptatum, aspernatur
        similique rem magnam voluptatem in sunt eius veniam quia minus maiores
        asperiores impedit consectetur earum inventore perferendis ea quae odio
        et. Nulla deleniti, sunt explicabo totam reprehenderit doloremque cum
        mollitia, ducimus corporis quaerat suscipit sequi voluptates eligendi
        autem repellat inventore, vero dicta! Optio impedit corporis repellat
        quibusdam rerum vel, nobis facere possimus a! Repellat odio voluptatum
        quaerat nesciunt nulla fugiat laboriosam veritatis, facere velit
        suscipit dignissimos soluta accusamus natus labore voluptates nihil!
        Officiis voluptate aperiam quidem dolore consectetur cumque architecto
        vel accusamus dignissimos consequuntur soluta at ducimus ullam animi rem
        aliquam magni sit, facere corrupti illum ex. Veritatis, facilis et,
        sapiente cumque, voluptatum id exercitationem corporis aspernatur neque
        delectus animi libero possimus consequatur nulla. Nostrum doloremque
        sunt accusantium eveniet obcaecati, maxime sit autem exercitationem,
        adipisci porro, ea labore? Suscipit, ullam eaque voluptas reprehenderit
        quis repellendus quo accusantium nam doloribus in numquam, dignissimos
        possimus? Ducimus ipsam beatae nam dolore cumque molestiae culpa ipsum
        iure. Hic veniam odit tempore cumque aperiam impedit repudiandae quis at
        cupiditate tenetur quam reiciendis aliquam facilis ullam consequuntur
        iste tempora aliquid unde, quos sequi.
      </p>
    </div>
  );
}

export default App;
