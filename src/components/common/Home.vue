<template>
    <div class="wrapper">
        <v-head></v-head>
            <div class="content">
                <router-view></router-view>
              <v-footer></v-footer>

            </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vFooter from './Footer.vue';

export default {
    components: {
        vHead,
        vFooter
    }
};
</script>
