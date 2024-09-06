<template>
    <Layout>
        <Main id="main" @click-leave-request="clickLeaveRequest" @click-leave-presentation="clickLeavePresentation" />
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
        <PresentationDIalog v-model="isPresentationDialogVisible" :source="source" @send-request="onSendRequest" />
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
import { timeout } from '~/utils/utils'
import PresentationDIalog from '~/components/dialog/PresentationDIalog.vue'

const isRequestDialogVisible = ref(false)
const isPresentationDialogVisible = ref(false)
const isThanksDialogVisible = ref(false)
const source = ref('')
const clickLeaveRequest = (from: string) => {
    source.value = from
    isRequestDialogVisible.value = true
}
const clickLeavePresentation = (from: string) => {
    source.value = from
    isPresentationDialogVisible.value = true
}
const onSendRequest = async () => {
    await timeout(800)
    isRequestDialogVisible.value = false
    isPresentationDialogVisible.value = false
    await timeout(300)
    isThanksDialogVisible.value = true
}
</script>
