import { useEffect } from "react";

const TestCleanUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const position = document.documentElement.scrollTop;
      console.log("scrolling position: ", position);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      console.log("alo");
    };
  });

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
        debitis ad quae commodi ex quibusdam. Eum quibusdam, obcaecati placeat,
        ex, consequuntur aliquam similique quasi accusamus nemo maxime odio
        nesciunt rem laudantium ipsa expedita porro! Placeat numquam sed
        corporis porro harum inventore distinctio odit nihil ipsum aliquam, vero
        dolor, itaque sunt dolorum laboriosam maxime. Nam tempore excepturi
        soluta veniam accusamus quibusdam. Quisquam fugiat adipisci provident
        nihil eveniet voluptatum possimus quis sint distinctio, fuga ducimus
        perferendis magnam officiis nisi eos voluptates voluptatem. Quasi
        praesentium laborum necessitatibus atque velit, veritatis ipsam dicta
        voluptatem, assumenda minima doloremque reprehenderit tempora harum
        tempore enim animi deleniti reiciendis? Rerum laboriosam ullam velit
        veritatis inventore, nesciunt minus earum eius, ea quia, omnis rem
        perspiciatis eveniet non dicta magni quaerat quas voluptas ex ad a
        nulla! Iste dolorem eligendi numquam. At, beatae error repellendus
        numquam ipsa doloribus eos molestiae exercitationem saepe quod ea
        corrupti amet doloremque consequuntur quia odit itaque aut quis
        perspiciatis illo? Voluptatum quisquam similique, asperiores eveniet
        eius cum minima, dolorem architecto aspernatur vel aperiam repellat
        nostrum sapiente suscipit possimus vitae amet quae tempore ducimus
        voluptate hic quia doloribus! Cum exercitationem laborum provident
        deleniti ipsam consequuntur placeat impedit dignissimos temporibus
        debitis quibusdam hic praesentium corrupti doloremque, eos modi dolor!
        Ex eligendi laborum aliquid, illum asperiores tenetur repellat natus
        beatae animi facere tempore quidem ipsa qui laboriosam nam perferendis
        sit ad perspiciatis corrupti sint ipsam magnam accusamus? Explicabo est
        facilis soluta optio vitae! Vero ratione reprehenderit reiciendis minus
        dolores, odio sequi, quibusdam ut molestiae nostrum, ducimus labore
        beatae! Sunt, quis magnam optio ipsum harum aut aperiam laborum
        reiciendis maiores dignissimos at saepe ea dolore perspiciatis, ab
        facere! Possimus itaque error soluta nemo, sapiente enim veritatis earum
        non. Porro, aperiam. Quisquam qui deleniti saepe? Adipisci repellat
        doloremque, mollitia fugiat suscipit beatae minus recusandae praesentium
        cumque vel natus illum voluptas ut at sunt sapiente saepe explicabo
        nesciunt exercitationem! Optio non consequuntur doloribus ipsa tempora
        facilis quis rerum, praesentium consequatur minima at voluptatibus ad
        commodi! Cupiditate consequatur neque deleniti eaque dolorem aperiam
        debitis dicta hic. Vitae odio reprehenderit blanditiis sequi quod fuga,
        consectetur accusamus est repellat cupiditate soluta molestiae explicabo
        nobis molestias quae consequatur voluptatum earum veritatis eveniet
        magnam! Quia, dolor rerum! Quis, accusantium. Sapiente beatae quia
        assumenda quidem natus enim, nam molestias corporis obcaecati in placeat
        quaerat voluptate cumque temporibus? Voluptatum modi quaerat enim vel
        libero. Veniam eius saepe obcaecati expedita ea praesentium quasi nobis
        libero harum neque sunt omnis, porro est consectetur facilis molestiae
        recusandae quia molestias. Iste pariatur, excepturi natus nisi adipisci
        minima odio suscipit inventore tenetur ad quas ratione voluptates
        facere. Vero maxime corrupti repellendus soluta nostrum veritatis
        officia itaque et tempore doloribus debitis laboriosam quisquam fuga
        numquam amet quod, iste totam aliquid similique ratione dignissimos?
        Sequi harum, placeat nemo ducimus veniam magni. Earum repellendus
        corporis enim iste officia repudiandae debitis, adipisci maxime
        voluptatibus distinctio, expedita laborum ipsa cumque accusantium ea
        dicta dolore repellat. Delectus, porro et! Eveniet perspiciatis,
        explicabo soluta dolorem perferendis laudantium, ipsam deserunt
        voluptatibus aliquam tempora ad sapiente molestiae dolor cumque aut,
        placeat doloremque voluptatem fugiat esse vero laborum assumenda
        voluptate alias cupiditate. Quis, mollitia iste maxime consequuntur
        assumenda odio quam perspiciatis excepturi officiis magnam sunt ex ab
        velit similique. Magnam voluptatibus aperiam ipsum recusandae sunt,
        mollitia quidem minus cupiditate vel, facere molestiae sint consequuntur
        placeat. Iste itaque perspiciatis fuga magni qui sapiente necessitatibus
        vel deserunt et distinctio in nesciunt suscipit, laboriosam repudiandae
        eligendi voluptatem nemo inventore veniam similique voluptate
        voluptatum. Tenetur iusto magnam natus quo voluptate corporis unde
        molestias? Consectetur magnam doloribus natus esse, assumenda fugit
        accusantium! Corrupti doloribus totam tempora officia commodi? Nulla nam
        consequatur non eaque odit accusantium molestiae itaque illum labore,
        quia ducimus ex adipisci possimus laborum fugiat voluptatum dolores sint
        velit, officiis deleniti dolorem eveniet. Sed itaque sequi quia
        aspernatur fuga repudiandae provident, necessitatibus est qui aliquid
        dignissimos similique perferendis ut eaque, possimus velit a,
        repellendus omnis! Velit ipsa ullam doloribus unde corrupti. Provident,
        voluptatem non! Non unde neque, necessitatibus placeat accusantium
        voluptatem velit. Sint suscipit ducimus dolore, perferendis dicta
        architecto unde ratione voluptates tempore nemo nostrum consectetur.
        Adipisci minima temporibus quae, magnam ullam amet et vel delectus
        voluptate quas ducimus mollitia cumque ex, consectetur iure, cum quos.
        Quod itaque modi nostrum autem dolor eos commodi impedit minus, ullam
        doloribus ratione consectetur consequuntur voluptas voluptatem eligendi
        nam nesciunt harum inventore, officiis sed libero ex fuga. Soluta
        corporis autem recusandae ex quisquam quasi cupiditate excepturi maiores
        nulla? Maxime fugit ab omnis maiores odit quam consectetur, quae quas
        porro exercitationem quidem ratione velit harum earum provident.
        Voluptate commodi dolores repudiandae expedita eius id neque!
        Doloremque, officiis consectetur error placeat optio excepturi, itaque
        obcaecati praesentium eos consequatur officia aliquid. Cum hic odit
        placeat animi totam sint delectus voluptate? Ea incidunt laboriosam
        totam reprehenderit velit tempore facilis pariatur molestias, laudantium
        culpa, provident repellendus esse dolore deleniti ut iure dicta eum at
        similique quis aliquid, fugit debitis quo rem! Dicta dolores itaque
        recusandae architecto esse consectetur nobis voluptatum facilis error
        non nostrum quas perferendis cum beatae temporibus tenetur, hic soluta
        reiciendis! Cumque nesciunt fugiat quidem animi dolores ut quaerat
        accusantium officia repellat neque adipisci modi cum quod consequuntur
        laborum facilis nihil distinctio iusto eum veniam nam, aspernatur ab!
        Ratione provident voluptatem minima veritatis? Soluta, quidem
        cupiditate. Beatae sequi consequuntur sed minima odit in optio debitis
        consectetur quo, illo eveniet, ullam ipsa eligendi corporis quia,
        necessitatibus dolore nulla sapiente architecto repellendus iste. Veniam
        accusamus debitis eius quas, ducimus nesciunt incidunt eos fuga enim
        tempora accusantium modi ratione nam, expedita delectus earum facilis
        explicabo iure sed? Expedita id, fuga laudantium esse debitis vitae quis
        est ab dolorum voluptatibus explicabo labore eos, exercitationem
        repellendus deleniti libero. Unde laboriosam beatae eligendi numquam quo
        in facilis, aliquid aperiam dolorum temporibus esse, voluptates quidem,
        doloribus nulla consequuntur explicabo dolore molestias? Alias molestiae
        dolorum odit temporibus id cumque quo ab, debitis aperiam consequatur
        vel. Iste, earum molestiae! Eum officiis perspiciatis, error esse
        doloribus repellat sapiente praesentium sint molestiae, recusandae amet
        obcaecati delectus blanditiis quisquam repellendus temporibus inventore
        eligendi, reprehenderit molestias fugit. Quae cupiditate voluptate
        similique minus necessitatibus nobis magni eligendi corporis.
      </p>
    </div>
  );
};

export default TestCleanUp;
