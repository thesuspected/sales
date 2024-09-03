<template>
    <Layout>
        <Main id="main" @click-leave-request="clickLeaveRequest" />
        <ForWho class="pt-container bg-white" />
        <Stats class="pb-container bg-white" id="numbers" />
        <Steps class="py-container" @click-leave-request="clickLeaveRequest" />
        <Services class="py-container" id="price" @click-leave-request="clickLeaveRequest" />
        <Clients class="pt-container" id="clients" />
        <Team id="team" />
        <Action id="contacts" />
        <Questions />
        <Footer class="mt-container" />
        <RequestFormDialog v-model="isRequestDialogVisible" :source="source" @send-request="onSendRequest" />
        <ThanksDialog v-model="isThanksDialogVisible" />
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
import RequestFormDialog from '~/components/dialog/RequestFormDialog.vue'
import ThanksDialog from '~/components/dialog/ThanksDialog.vue'

const isRequestDialogVisible = ref(false)
const isThanksDialogVisible = ref(true)
const source = ref('')
const clickLeaveRequest = (from: string) => {
    source.value = from
    isRequestDialogVisible.value = true
}
const onSendRequest = () => {
    isRequestDialogVisible.value = false
    isThanksDialogVisible.value = true
}
</script>
