<script>
  import VueHowler from 'vue-howler'
  import { GiphyFetch } from "@giphy/js-fetch-api";
  import { useAsync } from "react-async-hook";
  import { IGif } from "@giphy/js-types";


  const gf = new GiphyFetch('hoc7Xw81iwUP2iewXhekupQznVmYDlHK')

  export default {
    methods: {
     ChangeGif() {
  //const [gif, setGif] = useState<IGif | null>(null);
  useAsync(async () => {
    const { data: gifs } = await gf.emoji()
    const { data } = await gf.random({ tag: 'emoj', type: 'stickers' })
    setGif(data);
  }, []);
  return gif && <Gif gif={gif} width={200} />;
}
    }
  }
</script>

<template>
<div class="Piano border border-danger">
  <img class="border border-danger mt-5" src="" alt="">
  <button v-on:click="ChangeGif()">CLICK</button>
</div>
</template>

<style lang="postcss" scoped>
.Piano {

}
</style>
