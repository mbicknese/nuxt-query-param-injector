<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        querypoc
      </h1>
      <h2 class="subtitle">
        Proof of Concept for injecting query params
      </h2>
      <WithQueryParam query-key="foo">
        <template #default="param">
          <div>
            <NameGreeter :name="param" />
            <p v-if="!param" class="links">
              Please navigate to http://localhost:3000/?foo=[yourname]
            </p>
          </div>
        </template>
      </WithQueryParam>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NameGreeter from '~/components/NameGreeter.vue'
import WithQueryParam from '~/components/WithQueryParam.vue'

export default {
  components: {
    Logo,
    NameGreeter,
    WithQueryParam
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
