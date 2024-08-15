<template>
    <Layout>
        <Main />
        <ForWho class="pt-container bg-white" />
        <Stats class="pb-container bg-white" id="numbers" />
        <Steps class="py-container" />
        <Services class="py-container" id="price" />
        <Clients class="pt-container" id="clients" />
        <Team id="team" />
        <Action id="contacts" />
        <Questions />
        <Footer class="mt-container" />
    </Layout>
</template>
<script setup lang="ts">
import ForWho from '~/components/sections/ForWho.vue'
import Stats from '~/components/sections/Stats.vue'
import Steps from '~/components/sections/Steps.vue'
import Services from '~/components/sections/Services.vue'
import Clients from '~/components/sections/Clients.vue'
import Team from '~/components/sections/Team.vue'
import Action from '~/components/sections/Action.vue'
import Questions from '~/components/sections/Questions.vue'
import Main from '~/components/sections/Main.vue'
import Layout from '~/components/Layout.vue'
import Footer from '~/components/sections/Footer.vue'
</script>
