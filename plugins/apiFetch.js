import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    nuxtApp.provide('apiFetch', $fetch.create({
      baseURL: config.public.BASE_URL,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'X-CSRF-TOKEN': useCookie('XSRF-TOKEN').value
      }
    }))
});